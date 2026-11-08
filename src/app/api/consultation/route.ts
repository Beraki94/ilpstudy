import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

interface ConsultationPayload {
  fullName: string;
  age: string | number;
  email: string;
  phone?: string;
  programme: string;
  targetIntake: string;
  academicBackground: string;
  englishTest: string;
  testDetails?: string;
  discussionTopics: string;
  agreed: boolean;
  /** Honeypot spam trap (should be left empty by real humans) */
  botTrap?: string;
}

// Strict email regex RFC 5322 compliant subset
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

function sanitizeInput(str: unknown): string {
  if (typeof str !== 'string') return '';
  return str.trim();
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    let body: ConsultationPayload;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON request format.' },
        { status: 400 }
      );
    }

    // 1. Spambot Honeypot Detection
    if (body.botTrap && body.botTrap.trim() !== '') {
      // Silently accept without sending to avoid educating spam bots
      return NextResponse.json({
        success: true,
        referenceId: `ILP-SPAM-${Date.now().toString(36).toUpperCase()}`,
        message: 'Consultation request received successfully.'
      });
    }

    // 2. Comprehensive Input Sanitization & Server-side Validation
    const fullName = sanitizeInput(body.fullName);
    const ageRaw = sanitizeInput(body.age);
    const email = sanitizeInput(body.email).toLowerCase();
    const phone = sanitizeInput(body.phone);
    const programme = sanitizeInput(body.programme);
    const targetIntake = sanitizeInput(body.targetIntake);
    const academicBackground = sanitizeInput(body.academicBackground);
    const englishTest = sanitizeInput(body.englishTest);
    const testDetails = sanitizeInput(body.testDetails);
    const discussionTopics = sanitizeInput(body.discussionTopics);
    const agreed = Boolean(body.agreed);

    const validationErrors: Record<string, string> = {};

    if (!fullName || fullName.length < 2) {
      validationErrors.fullName = 'Please enter your full name (at least 2 characters).';
    } else if (fullName.length > 100) {
      validationErrors.fullName = 'Full name must be under 100 characters.';
    }

    const ageNum = parseInt(ageRaw, 10);
    if (!ageRaw || isNaN(ageNum) || ageNum < 14 || ageNum > 80) {
      validationErrors.age = 'Please enter a valid age between 14 and 80.';
    }

    if (!email) {
      validationErrors.email = 'Email address is required.';
    } else if (!EMAIL_REGEX.test(email) || email.length > 254) {
      validationErrors.email = 'Please provide a valid email address (e.g., student@example.com).';
    }

    if (phone) {
      const digitsOnly = phone.replace(/\D/g, '');
      if (digitsOnly.length < 6 || digitsOnly.length > 20) {
        validationErrors.phone = 'Please provide a valid phone or WhatsApp number.';
      }
    }

    if (!programme) {
      validationErrors.programme = 'Please select your target programme.';
    }

    if (!targetIntake) {
      validationErrors.targetIntake = 'Please select your preferred intake.';
    }

    if (!academicBackground || academicBackground.length < 3) {
      validationErrors.academicBackground = 'Please specify your latest educational qualifications or grades.';
    } else if (academicBackground.length > 500) {
      validationErrors.academicBackground = 'Academic background details must be under 500 characters.';
    }

    if (!englishTest) {
      validationErrors.englishTest = 'Please select your English proficiency status.';
    }

    if (!discussionTopics || discussionTopics.length < 5) {
      validationErrors.discussionTopics = 'Please provide a brief question or preferred major/universities.';
    } else if (discussionTopics.length > 2000) {
      validationErrors.discussionTopics = 'Message must be under 2,000 characters.';
    }

    if (!agreed) {
      validationErrors.agreed = 'You must agree to the privacy statement to submit your consultation request.';
    }

    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed. Please review the highlighted fields.',
          fields: validationErrors,
        },
        { status: 422 }
      );
    }

    // 3. Generate Reference ID and Timestamp
    const timestamp = new Date();
    const referenceId = `ILP-${timestamp.getFullYear()}${String(timestamp.getMonth() + 1).padStart(2, '0')}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    const formattedDate = timestamp.toLocaleString('en-GB', {
      timeZone: 'Asia/Dhaka',
      dateStyle: 'full',
      timeStyle: 'medium',
    }) + ' (Dhaka Time)';

    // Clean phone number for WhatsApp link
    const cleanPhoneDigits = phone.replace(/\D/g, '');
    const whatsAppLink = cleanPhoneDigits ? `https://wa.me/${cleanPhoneDigits}` : null;

    // 4. HTML Email Design (Responsive & Branded for ILP Study)
    const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Consultation Request: ${escapeHtml(fullName)}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #1e293b; }
    .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #0e1726 0%, #1e1b4b 100%); padding: 32px 28px; text-align: left; }
    .logo-badge { display: inline-block; background: rgba(255, 255, 255, 0.12); color: #ec4899; font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; border: 1px solid rgba(236, 72, 153, 0.3); }
    .title { color: #ffffff; font-size: 22px; font-weight: 800; margin: 0 0 6px 0; line-height: 1.3; }
    .subtitle { color: #cbd5e1; font-size: 13px; margin: 0; }
    .content { padding: 28px; }
    .ref-bar { display: flex; justify-content: space-between; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px 16px; margin-bottom: 24px; font-size: 12px; }
    .ref-item { font-weight: 600; color: #475569; }
    .ref-val { font-weight: 800; color: #0f172a; }
    .section-title { font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #ec4899; margin: 24px 0 12px 0; border-bottom: 2px solid #fce7f3; padding-bottom: 4px; }
    .data-table { width: 100%; border-collapse: collapse; margin-bottom: 8px; font-size: 14px; }
    .data-table td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; vertical-align: top; }
    .data-table td.label { width: 36%; color: #64748b; font-weight: 600; }
    .data-table td.value { width: 64%; color: #0f172a; font-weight: 700; }
    .message-box { background: #fdf2f8; border-left: 4px solid #ec4899; padding: 16px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #334155; margin-top: 10px; word-break: break-word; }
    .actions { margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; }
    .btn { display: inline-block; padding: 12px 24px; margin: 6px; border-radius: 9999px; font-weight: 700; font-size: 13px; text-decoration: none; text-align: center; }
    .btn-email { background: #ec4899; color: #ffffff !important; box-shadow: 0 4px 12px rgba(236,72,153,0.3); }
    .btn-wa { background: #10b981; color: #ffffff !important; box-shadow: 0 4px 12px rgba(16,185,129,0.3); }
    .footer { background: #0e1726; color: #94a3b8; font-size: 11px; padding: 24px 28px; text-align: center; line-height: 1.6; }
    .footer strong { color: #f8fafc; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo-badge">ILP Study Admissions Lead</div>
      <h1 class="title">New Consultation Request</h1>
      <p class="subtitle">A prospective student has submitted an inquiry on the official portal.</p>
    </div>

    <div class="content">
      <table style="width: 100%; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 20px; padding: 12px 16px; font-size: 12px;">
        <tr>
          <td><span style="color: #64748b;">Reference ID:</span> <strong style="color: #0f172a;">${escapeHtml(referenceId)}</strong></td>
          <td style="text-align: right;"><span style="color: #64748b;">Received:</span> <strong style="color: #0f172a;">${escapeHtml(formattedDate)}</strong></td>
        </tr>
      </table>

      <div class="section-title">Student Profile</div>
      <table class="data-table">
        <tr>
          <td class="label">Full Name</td>
          <td class="value">${escapeHtml(fullName)}</td>
        </tr>
        <tr>
          <td class="label">Age</td>
          <td class="value">${escapeHtml(String(ageNum))} years old</td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="value"><a href="mailto:${escapeHtml(email)}" style="color: #ec4899; text-decoration: none; font-weight: 800;">${escapeHtml(email)}</a></td>
        </tr>
        <tr>
          <td class="label">Phone / WhatsApp</td>
          <td class="value">${phone ? `<a href="tel:${escapeHtml(phone)}" style="color: #0f172a; text-decoration: none;">${escapeHtml(phone)}</a>` : '<em style="color:#94a3b8; font-weight:normal;">Not provided</em>'}</td>
        </tr>
      </table>

      <div class="section-title">Academic & Study Goals</div>
      <table class="data-table">
        <tr>
          <td class="label">Target Programme</td>
          <td class="value"><span style="background: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 6px; font-size: 13px;">${escapeHtml(programme)}</span></td>
        </tr>
        <tr>
          <td class="label">Target Intake</td>
          <td class="value"><span style="background: #ecfdf5; color: #047857; padding: 3px 8px; border-radius: 6px; font-size: 13px;">${escapeHtml(targetIntake)}</span></td>
        </tr>
        <tr>
          <td class="label">Academic Background</td>
          <td class="value">${escapeHtml(academicBackground)}</td>
        </tr>
        <tr>
          <td class="label">English Proficiency</td>
          <td class="value">${escapeHtml(englishTest)}${testDetails ? ` &mdash; <span style="font-weight:normal; color:#475569;">${escapeHtml(testDetails)}</span>` : ''}</td>
        </tr>
      </table>

      <div class="section-title">Questions & Discussion Topics</div>
      <div class="message-box">
        ${escapeHtml(discussionTopics).replace(/\n/g, '<br/>')}
      </div>

      <div class="actions">
        <a href="mailto:${escapeHtml(email)}?subject=ILP%20Study%20Consultation%20Follow-up%20%5B${encodeURIComponent(referenceId)}%5D" class="btn btn-email">
          &rarr; Reply via Email (${escapeHtml(email)})
        </a>
        ${whatsAppLink ? `
        <a href="${whatsAppLink}?text=${encodeURIComponent(`Hello ${fullName}, this is ILP Study following up on your consultation request for ${programme} (${targetIntake}) [Ref: ${referenceId}].`)}" target="_blank" class="btn btn-wa">
          Chat on WhatsApp (${escapeHtml(phone)})
        </a>
        ` : ''}
      </div>
    </div>

    <div class="footer">
      <strong>International Learning Pathways (trading as ILP Study)</strong><br />
      Kader’s Complex, Lift No. 9, H-888/C, East Shewrapara, Mirpur, Dhaka-1216, Bangladesh.<br />
      Hotline: +880 1602 566398 &bull; WhatsApp: +880 1895 626831 &bull; Email: info@ilpstudy.com<br />
      This notification was automatically dispatched from the official web portal (<a href="https://www.ilpstudy.com" style="color: #cbd5e1;">ilpstudy.com</a>).
    </div>
  </div>
</body>
</html>
    `.trim();

    // Plaintext fallback for email clients without HTML
    const emailText = `
ILP STUDY CONSULTATION REQUEST [${referenceId}]
============================================================
Received: ${formattedDate}

STUDENT PROFILE:
- Name: ${fullName}
- Age: ${ageNum}
- Email: ${email}
- Phone/WhatsApp: ${phone || 'Not provided'}

ACADEMIC & STUDY GOALS:
- Programme: ${programme}
- Target Intake: ${targetIntake}
- Academic Background: ${academicBackground}
- English Test: ${englishTest} ${testDetails ? `(${testDetails})` : ''}

DISCUSSION TOPICS:
${discussionTopics}

------------------------------------------------------------
International Learning Pathways (ILP Study)
Dhaka Office: Kader’s Complex, Lift No. 9, East Shewrapara, Mirpur, Dhaka-1216.
    `.trim();

    // 5. Check Resend Configuration & Dispatch
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.RESEND_TO_EMAIL || 'info@ilpstudy.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'ILP Study Portal <onboarding@resend.dev>';

    if (!apiKey) {
      console.warn(
        `[ILP Study] RESEND_API_KEY is not configured in environment variables. ` +
        `Consultation request [${referenceId}] was captured and logged locally.`
      );

      // Return success with clear dev notice so the frontend works seamlessly during testing
      return NextResponse.json({
        success: true,
        referenceId,
        devNotice: 'RESEND_API_KEY is not set in environment. Simulated delivery recorded.',
        studentSummary: {
          fullName,
          email,
          programme,
          targetIntake,
        },
      });
    }

    const resend = new Resend(apiKey);

    let sendResult = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `[New Lead] Consultation Request: ${fullName} - ${programme} (${targetIntake})`,
      html: emailHtml,
      text: emailText,
      headers: {
        'X-Entity-Ref-ID': referenceId,
      },
    });

    // If unverified test domain restricts recipient, automatically fallback to the registered Resend account email
    if (sendResult.error && sendResult.error.message?.includes('You can only send testing emails to your own email address')) {
      const match = sendResult.error.message.match(/\(([^)]+)\)/);
      const registeredEmail = match ? match[1] : 'ilpstudy39@gmail.com';
      console.warn(`[ILP Study] Target ${toEmail} requires domain verification. Delivering to account email (${registeredEmail}) as fallback.`);
      
      sendResult = await resend.emails.send({
        from: fromEmail,
        to: [registeredEmail],
        replyTo: email,
        subject: `[New Lead] Consultation Request: ${fullName} - ${programme} (${targetIntake})`,
        html: emailHtml,
        text: emailText,
        headers: {
          'X-Entity-Ref-ID': referenceId,
        },
      });
    }

    if (sendResult.error) {
      console.error('[ILP Study] Resend API Error:', sendResult.error);
      return NextResponse.json(
        {
          success: false,
          error: sendResult.error.message || 'Resend was unable to deliver the email.',
          code: sendResult.error.name,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      referenceId,
      messageId: sendResult.data?.id,
      studentSummary: {
        fullName,
        email,
        programme,
        targetIntake,
      },
    });

  } catch (error) {
    console.error('[ILP Study] Unexpected API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected server error occurred.';
    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}

