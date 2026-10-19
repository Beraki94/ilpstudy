export interface StudentGuide {
  id: string; // URL slug e.g. "foundation-in-china-after-ssc-or-o-levels"
  numericId?: string; // e.g. "1" for backwards compatibility
  title: string;
  pageTitle: string;
  searchDescription: string;
  category: string;
  badge: string;
  readTime: string;
  reviewedDate: string;
  image: string;
  excerpt: string;
  leadParagraph: string;
  sections: {
    heading: string;
    paragraphs: string[];
    checklist?: string[];
  }[];
  relatedGuides: {
    category: string;
    title: string;
    description: string;
    slug: string;
  }[];
}

export const studentGuides: StudentGuide[] = [
  {
    id: "foundation-in-china-after-ssc-or-o-levels",
    numericId: "1",
    title: "Foundation in China After SSC or O Levels: What to Verify",
    pageTitle: "Foundation in China After SSC or O Levels: What to Verify | ILP Study",
    searchDescription: "Check qualification acceptance and progression conditions before choosing a pre-university route.",
    category: "Foundation",
    badge: "Student Journal / Foundation",
    readTime: "2 min read",
    reviewedDate: "12 October 2026",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    excerpt: "Check qualification acceptance and progression conditions before choosing a pre-university route in China after completing SSC or O Levels in Bangladesh.",
    leadParagraph: "An SSC or O Level student may see a foundation course advertised as a faster route to a bachelor degree. The important question is not whether the course is called 'foundation.' It is whether the university accepts your existing qualification into that course and recognises the completed course for the particular degree you want.",
    sections: [
      {
        heading: "Do not assume every foundation replaces HSC",
        paragraphs: [
          "SSC and O Levels are different qualifications. Even two foundation programs can accept different educational histories. Before committing, provide your complete certificate and transcript and request the applicable entry rule. A verbal statement that 'SSC students can join' is not enough to establish later bachelor eligibility."
        ]
      },
      {
        heading: "Look for a defined academic route",
        paragraphs: [
          "Foundation entry and progression rules are institution-specific. An O Level route at one university does not establish eligibility for every SSC student or guarantee bachelor admission elsewhere. Check the accepted qualifications and progression conditions in the current notice.",
          "Ask for the intended bachelor degree in writing. Check whether progression happens at the same university, whether you must apply again, which subjects and grades are required, and whether language or CSCA evidence is needed at that stage. 'Eligible to apply' and 'admitted' are different outcomes."
        ]
      },
      {
        heading: "Understand the course you will study",
        paragraphs: [
          "Request the actual curriculum and teaching language. For an engineering plan, academic mathematics and physics preparation may matter. For a Chinese-taught degree, your language target matters too. A short language course may be valuable without being a substitute for missing secondary qualifications.",
          "Check the timetable against your intended degree intake. A course finishing after the bachelor application deadline cannot be assumed to solve that deadline. Ask whether predicted foundation results are accepted or whether a later intake is required."
        ]
      },
      {
        heading: "Plan for age, care and cost",
        paragraphs: [
          "If you will be under 18, investigate the university's guardian requirements, accommodation rules and support arrangements. Discuss the plan with your family before arranging travel. Include foundation tuition, housing, insurance, living costs and the possible cost of a later degree application.",
          "Do not budget on a future scholarship until its eligibility and award are established. Also ask what happens if you do not meet progression grades: can you repeat, apply elsewhere, or finish with only a course certificate?"
        ]
      },
      {
        heading: "The decision checklist",
        paragraphs: [
          "Before paying, obtain answers to four questions: Is my qualification accepted? Which degree can I progress toward? What must I achieve? What is my alternative if progression does not happen? If any answer is unclear, resolve it first. ILP Study can help organise the enquiry and compare the published pathway with your academic profile."
        ],
        checklist: [
          "Is my qualification formally accepted in writing?",
          "Which specific degree can I progress toward?",
          "What minimum grades and language/CSCA benchmarks must I achieve?",
          "What is the alternative fallback if progression does not occur?"
        ]
      }
    ],
    relatedGuides: [
      {
        category: "Foundation",
        title: "Chinese Language Course or Foundation in China: Which Fits You?",
        description: "Compare the learning goal, curriculum and progression conditions of two preparation routes.",
        slug: "chinese-language-course-or-foundation"
      },
      {
        category: "Intakes",
        title: "March or September Intake in China: Plan the Right Sequence",
        description: "Understand preparation timing and degree deadlines before planning a March-to-September pathway.",
        slug: "march-or-september-intake-in-china"
      },
      {
        category: "Costs",
        title: "Study in China Cost from Bangladesh: Build a Complete Budget",
        description: "A practical budget method covering university bills, monthly living expenses and one-time costs.",
        slug: "study-in-china-cost-from-bangladesh"
      }
    ]
  },
  {
    id: "full-scholarship-or-tuition-waiver",
    numericId: "2",
    title: "Full Scholarship or Tuition Waiver? How to Read a China Offer",
    pageTitle: "Full Scholarship or Tuition Waiver? How to Read a China Offer | ILP Study",
    searchDescription: "Understand award coverage, payment timing and renewal before relying on scholarship headlines.",
    category: "Scholarships",
    badge: "Student Journal / Scholarships",
    readTime: "2 min read",
    reviewedDate: "12 October 2026",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    excerpt: "Understand award coverage, payment timing and renewal conditions before relying on scholarship headlines for studying in China.",
    leadParagraph: "A headline does not define an award. 'Full scholarship,' '100% scholarship' and 'tuition waiver' are often used together in advertisements, but they should not be treated as identical. Read the official award name and coverage. A 100% tuition waiver describes tuition; it does not automatically describe housing, insurance, flights or a monthly allowance.",
    sections: [
      {
        heading: "Separate every cost line",
        paragraphs: [
          "Create a coverage checklist with separate lines for tuition, accommodation, insurance, living support and travel. For each line write covered, partly covered, not covered or not yet confirmed. An unanswered question should stay unanswered in your budget rather than being filled with an optimistic assumption."
        ]
      },
      {
        heading: "Check duration and payment timing",
        paragraphs: [
          "An award can apply only to the first year, a single payment or a defined course period. Ask whether future support requires a new application or annual review. Find the academic, attendance and conduct conditions and what happens if you change your major or repeat a year.",
          "Also investigate when the money reaches the student. A scholarship paid after registration may not remove the need to pay earlier bills. Families should understand cash-flow timing as well as the total amount."
        ]
      },
      {
        heading: "Compare a real distinction",
        paragraphs: [
          "A first-year tuition waiver and a one-time financial award are different forms of support. Neither automatically establishes a multi-year package covering every expense. Use the actual award notice to identify coverage and duration.",
          "Use that example to ask better questions at any institution: Which award am I applying for? Who selects recipients? What exactly will I pay? Can I hold another award at the same time? Where are the written continuation rules?"
        ]
      },
      {
        heading: "Model the remaining cost",
        paragraphs: [
          "Make one budget without the award and another with only confirmed coverage deducted. If tuition is waived but accommodation is not, retain the housing bill. If a stipend amount is uncertain, do not use it to balance the budget. Include costs such as documents, travel and deposits even where an offer sounds comprehensive.",
          "Before accepting, discuss how your family would respond to a delayed payment or a non-renewal. A realistic fallback can prevent an academic setback becoming a financial emergency."
        ]
      },
      {
        heading: "Keep the award evidence",
        paragraphs: [
          "Save the official notice and final award document alongside the admission letter. If a consultant explains coverage verbally, ask for the source that supports it. Avoid claims that a portal account or a foundation seat guarantees funding.",
          "ILP Study can help you compare scholarship terms and identify gaps in an offer. The relevant university or scholarship authority makes the decision. Your goal is to understand the exact award well enough to plan your studies responsibly."
        ]
      }
    ],
    relatedGuides: [
      {
        category: "Costs",
        title: "Study in China Cost from Bangladesh: Build a Complete Budget",
        description: "A practical budget method covering university bills, monthly living expenses and one-time costs.",
        slug: "study-in-china-cost-from-bangladesh"
      },
      {
        category: "Scholarships",
        title: "CSC Scholarship for Bangladesh Students: Find the Correct Application Route",
        description: "Distinguish the current scholarship call, application channel and required documents before applying.",
        slug: "csc-scholarship-for-bangladesh-students"
      },
      {
        category: "Intakes",
        title: "March or September Intake in China: Plan the Right Sequence",
        description: "Understand preparation timing and degree deadlines before planning a March-to-September pathway.",
        slug: "march-or-september-intake-in-china"
      }
    ]
  },
  {
    id: "china-student-visa-from-bangladesh",
    numericId: "3",
    title: "China Student Visa from Bangladesh: Prepare Your Questions and Arrival Plan",
    pageTitle: "China Student Visa from Bangladesh: Prepare Your Questions and Arrival Plan | ILP Study",
    searchDescription: "Understand study-visa categories and organise the current local instructions before arranging travel.",
    category: "Visa and Arrival",
    badge: "Student Journal / Visa and Arrival",
    readTime: "2 min read",
    reviewedDate: "12 October 2026",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    excerpt: "Understand X1 and X2 study-visa categories, document requirements, and prepare your arrival plan for China from Bangladesh.",
    leadParagraph: "Admission and visa preparation are different stages. Once you receive university documents, check the current Chinese visa instructions that apply to applicants in Bangladesh. A university offer does not guarantee a visa, and a consultancy cannot decide the visa outcome. Use official instructions for the application channel, documents and appointments.",
    sections: [
      {
        heading: "X1 vs X2 Visa Categories",
        paragraphs: [
          "General Chinese government guidance distinguishes X1 for study longer than 180 days and X2 for study of no more than 180 days. Do not select a category solely because a course is advertised as 'six months'; confirm its actual dates and the documents issued by the institution."
        ]
      },
      {
        heading: "Check the current Bangladesh process",
        paragraphs: [
          "Visa procedures, document handling and appointment arrangements can change. General visa category information does not replace current Bangladesh submission instructions. Check the embassy and the relevant authorised visa service for your case.",
          "Ask what admission and study documentation is required, how digital documents should be handled, which originals must be presented and whether additional evidence applies to you. Keep your university contact available if a study document needs clarification."
        ]
      },
      {
        heading: "Review the documents before booking travel",
        paragraphs: [
          "Check your passport details against the admission and visa documents. Resolve discrepancies through the issuer rather than editing the files. Keep the reporting date and accommodation confirmation with your travel plan.",
          "Allow time for the actual process and avoid planning around an assumed approval date. Before purchasing travel, understand the ticket's change and cancellation conditions. Keep a family contact informed of the campus address and your expected arrival schedule."
        ]
      },
      {
        heading: "Prepare for the first weeks",
        paragraphs: [
          "Save the university's international student contact and arrival instructions offline. Check whether pickup is arranged, how to reach accommodation and what happens if you arrive at night. Ask which documents the university wants at registration and retain accessible copies.",
          "For X1 holders, general guidance includes residence-permit arrangements after arrival. Follow the university and local exit-entry instructions for the applicable deadline and required process. Do not treat admission registration as automatically completing every immigration step."
        ]
      },
      {
        heading: "Keep assistance clearly defined",
        paragraphs: [
          "ILP Study can help you organise a preparation checklist and identify questions to resolve. University documents come from the institution, and visa or residence decisions come from the relevant authorities. If a service is included in your ILP package, obtain its scope and any additional charges in writing.",
          "The best arrival plan combines accurate documents, confirmed accommodation, accessible contacts and enough funds for early expenses. Prepare those practical details alongside the visa application so you can begin your studies with a clear next step."
        ]
      }
    ],
    relatedGuides: [
      {
        category: "Applications",
        title: "China University Application Documents: A Bangladesh Student Checklist",
        description: "Organise accurate documents, readable scans and intake-specific requirements before submission.",
        slug: "china-university-application-documents"
      },
      {
        category: "Costs",
        title: "Study in China Cost from Bangladesh: Build a Complete Budget",
        description: "A practical budget method covering university bills, monthly living expenses and one-time costs.",
        slug: "study-in-china-cost-from-bangladesh"
      },
      {
        category: "University Choice",
        title: "How to Choose a City in China for Your Studies",
        description: "Compare academic fit, campus location, accommodation and daily needs before choosing a city.",
        slug: "how-to-choose-a-city-in-china"
      }
    ]
  },
  {
    id: "china-university-application-documents",
    numericId: "4",
    title: "China University Application Documents: A Bangladesh Student Checklist",
    pageTitle: "China University Application Documents: A Bangladesh Student Checklist | ILP Study",
    searchDescription: "Organise accurate documents, readable scans and intake-specific requirements before submission.",
    category: "Applications",
    badge: "Student Journal / Applications",
    readTime: "3 min read",
    reviewedDate: "12 October 2026",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    excerpt: "Organise accurate documents, readable scans and intake-specific requirements before submitting to Chinese universities from Bangladesh.",
    leadParagraph: "Use the notice as your master checklist. There is no single document pack that completes every Chinese university application. Start with the relevant international admission notice and create a checklist for your degree and funding route. Separate documents required now from those the university allows you to provide later.",
    sections: [
      {
        heading: "Typical document categories to investigate",
        paragraphs: [
          "Typical categories to investigate include your passport, highest qualification, transcripts, language evidence, examination results, study plan, references, financial evidence and health or conduct documents. Graduate and undergraduate applications can differ. Do not assume every category is mandatory for every applicant."
        ]
      },
      {
        heading: "Check identity and education records",
        paragraphs: [
          "Use the name and spelling required by the application instructions and compare it with your passport and certificates. If documents have a genuine inconsistency, ask how the university wants it explained or corrected. Do not silently edit a scan to make the difference disappear.",
          "Check whether final-year students can submit a pre-graduation certificate and when the final qualification must arrive. If a translation or notarised copy is requested, confirm the accepted process and language. Do not arrange extra document work based only on another student's experience."
        ]
      },
      {
        heading: "Make files easy to review",
        paragraphs: [
          "Scan complete pages, including stamps and explanatory grading information. Keep text upright and readable. Use simple filenames such as Passport-Name.pdf or HSC-Transcript-Name.pdf, and follow any size and format limits in the application system.",
          "Preserve the original files separately from the submission folder. Save a copy of the completed forms and the application reference. Use your own accessible email so you can receive requests directly and maintain control of important messages."
        ]
      },
      {
        heading: "Prepare personal documents honestly",
        paragraphs: [
          "A study plan should describe your background and purpose. Recommendations should meet the requested academic criteria and come from genuine referees. For an English-medium education certificate, use accurate information from the relevant school or university.",
          "University document lists can include particular academic, language, health, financial and entrance-assessment evidence. Follow your own programme's current checklist and use the ILP Study document checklist to organise preparation."
        ]
      },
      {
        heading: "Time-sensitive items need a calendar",
        paragraphs: [
          "Health and conduct documents, test results and passport validity may have timing requirements. Check those against the actual submission and registration dates. Preparing a document too early can create a need to repeat it later.",
          "Before submission, review the pack once for completeness and once for consistency. ILP Study can help organise that review and flag questions for the institution. Accurate documents support a credible application; no adviser should promise an outcome based simply on having uploaded them."
        ]
      }
    ],
    relatedGuides: [
      {
        category: "Getting Started",
        title: "Study in China from Bangladesh: Your Application Roadmap",
        description: "A practical sequence for choosing a course, checking eligibility and preparing a complete application.",
        slug: "study-in-china-from-bangladesh-roadmap"
      },
      {
        category: "Postgraduate",
        title: "Master’s in China from Bangladesh: Build a Focused Application",
        description: "Match your bachelor background, study plan, language evidence and funding route to a suitable master’s program.",
        slug: "masters-in-china-from-bangladesh"
      },
      {
        category: "Visa and Arrival",
        title: "China Student Visa from Bangladesh: Prepare Your Questions and Arrival Plan",
        description: "Understand study-visa categories and organise the current local instructions before arranging travel.",
        slug: "china-student-visa-from-bangladesh"
      }
    ]
  },
  {
    id: "how-to-choose-a-city-in-china",
    numericId: "5",
    title: "How to Choose a City in China for Your Studies",
    pageTitle: "How to Choose a City in China for Your Studies | ILP Study",
    searchDescription: "Compare academic fit, campus location, accommodation and daily needs before choosing a city.",
    category: "University Choice",
    badge: "Student Journal / University Choice",
    readTime: "2 min read",
    reviewedDate: "12 October 2026",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    excerpt: "Compare academic fit, campus location, accommodation, living expenses and daily life before choosing a city in China.",
    leadParagraph: "Let the program lead the location choice. A city can be exciting, familiar or attractive in photographs, but your course should lead the shortlist. First identify suitable programs and their actual teaching campuses. Then compare the locations where those programs take place.",
    sections: [
      {
        heading: "Directory organization vs city ranking",
        paragraphs: [
          "Our directory organises research by province and city. It is a way to navigate institutions, not a ranking of cities or a complete list of every university in China. Some universities have multiple campuses, so a homepage address is not always the place you will study."
        ]
      },
      {
        heading: "Compare daily life with specific questions",
        paragraphs: [
          "Ask about dormitory room types, kitchen access, campus dining, transport to teaching buildings and essential shopping. If halal food matters to you, seek campus-specific information rather than assuming all campuses in the same city have identical options.",
          "Find the university's arrival instructions and check how you would travel from the airport or station. Understand whether your accommodation is reserved and what you need to do if you arrive outside normal registration hours."
        ]
      },
      {
        heading: "Budget from real bills",
        paragraphs: [
          "Do not label an entire city cheap or expensive without a usable cost comparison. University housing, room type and your daily spending can change the picture. Compare verified tuition and housing first, then estimate food, transport and other monthly expenses.",
          "Ask current students specific questions about costs and facilities, but use the university for official fees and rules. A student's experience can be helpful without being an admission policy or a guaranteed cost for you."
        ]
      },
      {
        heading: "Think about climate and adjustment",
        paragraphs: [
          "Check seasonal weather and suitable clothing for your arrival. Ask what language support, orientation and student services the university provides. Consider whether you prefer a large urban campus setting or a quieter study environment, then investigate the actual campus rather than relying on the city's reputation.",
          "For a clinical or lab-based degree, travel to placements and facilities can matter. For any course, the study timetable and attendance rules will shape daily life more directly than sightseeing opportunities."
        ]
      },
      {
        heading: "Use a simple decision matrix",
        paragraphs: [
          "Score each shortlisted program for academic fit, admission readiness, total cost, campus living and support. Give academic fit and affordability the highest weight if they are your priorities. Record which answers are verified and which are still assumptions.",
          "Discuss that matrix with your family and ILP Study. The goal is a city-and-program combination you can explain and sustain. A location is a useful filter; it should not replace the checks that determine whether a course is suitable for your education and budget."
        ]
      }
    ],
    relatedGuides: [
      {
        category: "University Choice",
        title: "Universities in Guangzhou: A Research Guide for Bangladesh Students",
        description: "Explore official international admission references in Guangzhou and build a course-first shortlist.",
        slug: "universities-in-guangzhou"
      },
      {
        category: "Costs",
        title: "Study in China Cost from Bangladesh: Build a Complete Budget",
        description: "A practical budget method covering university bills, monthly living expenses and one-time costs.",
        slug: "study-in-china-cost-from-bangladesh"
      },
      {
        category: "Programs",
        title: "English-Taught Programs in China: How to Check the Right Degree",
        description: "Verify teaching language, entry rules and the international catalogue before choosing an English-taught course.",
        slug: "english-taught-programs-in-china"
      }
    ]
  },
  {
    id: "csc-scholarship-for-bangladesh-students",
    numericId: "6",
    title: "CSC Scholarship for Bangladesh Students: Find the Correct Application Route",
    pageTitle: "CSC Scholarship for Bangladesh Students: Find the Correct Application Route | ILP Study",
    searchDescription: "Distinguish the current scholarship call, application channel and required documents before applying.",
    category: "Scholarships",
    badge: "Student Journal / Scholarships",
    readTime: "2 min read",
    reviewedDate: "12 October 2026",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    excerpt: "Distinguish the current Chinese Government Scholarship (CSC) call, Type A and Type B application channels, and required documents from Bangladesh.",
    leadParagraph: "Read the call for your country and year. The Chinese Government Scholarship is administered through specific calls and application routes. For a Bangladeshi student, the first task is to identify the applicable country or university notice—not copy an agency number from an old social post.",
    sections: [
      {
        heading: "Past cycles are not future guarantees",
        paragraphs: [
          "The Chinese Embassy in Bangladesh published a Type A announcement in December 2025 inviting Bangladeshi applicants for several study levels, with a deadline of 10 January 2026. That notice is a past-cycle reference. It does not establish the deadline, coverage or application instructions for a future call."
        ]
      },
      {
        heading: "Separate country and university instructions",
        paragraphs: [
          "Type A is commonly associated with designated dispatching channels; university notices may describe Type B applications. Follow the specific call to establish the correct category, receiving agency number, nomination procedure and whether a separate university application is required.",
          "Some universities ask for a pre-admission document or supervisor acceptance as part of a route. Others specify their own review stages. Do not assume registering on the CSC system alone completes every requirement. Save a checklist covering both the scholarship and university instructions."
        ]
      },
      {
        heading: "Make your application internally consistent",
        paragraphs: [
          "Your intended degree, major, study language and academic background should agree across forms. A study plan should explain why that course fits your previous education and future goal. Recommendations should come from the appropriate people and describe your academic capability; they should not be written as a generic advertisement.",
          "For bachelor study, check the applicable CSCA requirement and subjects. For graduate study, inspect the university's language, research and supervisor rules. Scholarship eligibility can differ from self-funded admission eligibility, including age and qualification conditions."
        ]
      },
      {
        heading: "Understand selection and timing",
        paragraphs: [
          "An eligible application is not an award. A university recommendation or pre-admission document is also not automatically the final scholarship result. Track official updates and keep your contact details accessible. Do not pay for a claimed guaranteed CSC result.",
          "Prepare a backup plan that your family can sustain. If you would only enrol with funding, decide how you will handle a self-funded admission offer. Ask about acceptance deadlines and refunds before making a payment while scholarship results are pending."
        ]
      },
      {
        heading: "What to bring to an ILP Study consultation",
        paragraphs: [
          "Bring your qualifications, intended study level, results, language evidence and any current call you are considering. We can help you compare the instructions and organise your preparation. Application support should make the process clearer while preserving your access to the account and official messages.",
          "Use Campus China and the relevant embassy or university notice as the authority for each cycle. Check a new call directly when it is published; do not update the year on an old notice and treat it as current."
        ]
      }
    ],
    relatedGuides: [
      {
        category: "Scholarships",
        title: "Full Scholarship or Tuition Waiver? How to Read a China Offer",
        description: "Understand award coverage, payment timing and renewal before relying on scholarship headlines.",
        slug: "full-scholarship-or-tuition-waiver"
      },
      {
        category: "Postgraduate",
        title: "Master’s in China from Bangladesh: Build a Focused Application",
        description: "Match your bachelor background, study plan, language evidence and funding route to a suitable master’s program.",
        slug: "masters-in-china-from-bangladesh"
      },
      {
        category: "Applications",
        title: "China University Application Documents: A Bangladesh Student Checklist",
        description: "Organise accurate documents, readable scans and intake-specific requirements before submission.",
        slug: "china-university-application-documents"
      }
    ]
  },
  {
    id: "csca-for-bangladeshi-students",
    numericId: "7",
    title: "CSCA for Bangladeshi Students: Check Subjects Before You Prepare",
    pageTitle: "CSCA for Bangladeshi Students: Check Subjects Before You Prepare | ILP Study",
    searchDescription: "Check CSCA subjects, test language, registration arrangements and university requirements before preparing from Bangladesh.",
    category: "CSCA",
    badge: "Student Journal / CSCA",
    readTime: "2 min read",
    reviewedDate: "12 October 2026",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    excerpt: "Check CSCA subjects, test language, examination dates and university requirements before preparing from Bangladesh.",
    leadParagraph: "Start with the university and major. CSCA stands for China Scholastic Competency Assessment. It is organised by the China Scholarship Council for international students planning undergraduate study in China. For a Bangladeshi HSC applicant, the first task is to read the intended university's admissions notice and major table. Confirm whether a score report is required, which subjects apply and when the result must be submitted.",
    sections: [
      {
        heading: "Major-specific combination",
        paragraphs: [
          "A requirement for one major does not establish the subject combination for another. Record the university, degree title, teaching language and intake together so that your preparation matches the actual application."
        ]
      },
      {
        heading: "Match subjects and test languages",
        paragraphs: [
          "Published subject areas include Professional Chinese, Mathematics, Physics and Chemistry. Professional Chinese has Humanities and STEM routes. The appropriate combination depends on the programme's requirements. English-taught study should not be treated as a blanket exemption from entrance assessment.",
          "Keep language proficiency and CSCA in separate rows on your preparation checklist. An IELTS result, an English-medium school certificate or an HSK score addresses a different requirement. Check whether each piece of evidence is accepted for your programme rather than assuming one replaces another."
        ]
      },
      {
        heading: "Plan dates in the correct time zone",
        paragraphs: [
          "Use the CSCA overview on this website for dated information, then visit the official CSCA website independently before registering. Check the registration window, subject timetable and result-submission deadline. Beijing time is two hours ahead of Bangladesh time; enter the relevant local time in your calendar.",
          "Do not arrange travel or pay for a course based only on a search snippet or an old screenshot. Available examination methods and centres depend on the session. Read the current official arrangements for the option you select."
        ]
      },
      {
        heading: "Prepare your information before registration",
        paragraphs: [
          "Use an email account you can access and check the required identity details against your passport. Read the current instructions for documents, payment, admission-ticket access and examination equipment. If something differs between your university's notice and the examination instructions, seek clarification before completing the relevant step."
        ]
      },
      {
        heading: "Bring focused questions to a consultation",
        paragraphs: [
          "Share your academic background, intended major and target intake with ILP Study. Ask which admissions requirements are confirmed and which still need a university answer. Keep the official syllabus as the basis for revision. A consultation helps organise preparation; it does not register you for CSCA, issue an official result or determine an admission outcome."
        ]
      }
    ],
    relatedGuides: [
      {
        category: "CSCA",
        title: "A Four-Week CSCA Study Plan for Busy HSC Students",
        description: "An illustrative four-week CSCA revision routine for HSC students, with syllabus checks, concept review and examination-day preparation.",
        slug: "four-week-csca-study-plan"
      },
      {
        category: "Eligibility",
        title: "Study in China After HSC: Eligibility for Bangladeshi Students",
        description: "Understand how HSC results, subject background, language evidence and CSCA fit into a bachelor application.",
        slug: "study-in-china-after-hsc"
      },
      {
        category: "Programs",
        title: "English-Taught Programs in China: How to Check the Right Degree",
        description: "Verify teaching language, entry rules and the international catalogue before choosing an English-taught course.",
        slug: "english-taught-programs-in-china"
      }
    ]
  },
  {
    id: "four-week-csca-study-plan",
    numericId: "8",
    title: "A Four-Week CSCA Study Plan for Busy HSC Students",
    pageTitle: "A Four-Week CSCA Study Plan for Busy HSC Students | ILP Study",
    searchDescription: "An illustrative four-week CSCA revision routine for HSC students, with syllabus checks, concept review and examination-day preparation.",
    category: "CSCA",
    badge: "Student Journal / CSCA",
    readTime: "2 min read",
    reviewedDate: "12 October 2026",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    excerpt: "An illustrative four-week CSCA revision routine for HSC students in Bangladesh, with syllabus checks, concept review and exam-day prep.",
    leadParagraph: "Use four weeks as a planning example. A four-week preparation plan is an illustrative routine, not an official CSCA course or a promise of readiness. The time you need depends on your subject knowledge, required papers and current commitments. Confirm the intended university's requirements and use the current official syllabus before deciding what to revise.",
    sections: [
      {
        heading: "Time management for HSC students",
        paragraphs: [
          "For an HSC student in Bangladesh, start by putting school, work and family commitments into a calendar. Choose regular sessions you can maintain. Reserve some time for reviewing errors as well as learning topics; completing pages without understanding mistakes gives you little useful evidence of progress."
        ]
      },
      {
        heading: "Week one: identify your starting point",
        paragraphs: [
          "List the syllabus areas for each required subject. Mark topics you understand, topics you partly remember and topics you need to learn. Compare this list with your previous schoolwork to identify gaps. Use lawful study resources and record the source of materials you intend to revisit.",
          "Set a small number of priorities. If a topic is unfamiliar, give it a learning session before asking yourself to answer it under time pressure. Keep notes of unresolved questions for a teacher or tutor."
        ]
      },
      {
        heading: "Week two: rebuild the weaker concepts",
        paragraphs: [
          "Work through your priorities in manageable sessions. Write short explanations in your own words and review the steps behind a calculation or argument. Check unfamiliar terminology in the language of the paper you will take.",
          "Maintain a revision record with the topic, the difficulty and the next action. For example, distinguish a concept you have not learned from a calculation you understood but completed incorrectly. Different problems need different revision."
        ]
      },
      {
        heading: "Week three: connect topics and review errors",
        paragraphs: [
          "Return to earlier topics and check whether you can explain them without looking at your notes. When using permitted exercises, review the method as well as the final answer. Spend extra time on recurring misunderstandings instead of repeatedly reading familiar chapters.",
          "Adjust the plan if important gaps remain. Taking longer to prepare can be a more realistic decision than following a four-week timetable that does not fit your starting point."
        ]
      },
      {
        heading: "Week four: review and organise the arrangements",
        paragraphs: [
          "Review your syllabus checklist and unresolved topics. Separately, read the official instructions for identification, the selected examination method and test-day arrangements. Confirm the relevant deadlines in Bangladesh time.",
          "ILP Study can help you organise preparation questions and your university application plan. Examination registration and official results remain part of the CSCA process. Use your progress record to decide what support you need next."
        ]
      }
    ],
    relatedGuides: [
      {
        category: "CSCA",
        title: "CSCA for Bangladeshi Students: Check Subjects Before You Prepare",
        description: "Check CSCA subjects, test language, registration arrangements and university requirements before preparing from Bangladesh.",
        slug: "csca-for-bangladeshi-students"
      },
      {
        category: "Applications",
        title: "China University Application Documents: A Bangladesh Student Checklist",
        description: "Organise accurate documents, readable scans and intake-specific requirements before submission.",
        slug: "china-university-application-documents"
      },
      {
        category: "Eligibility",
        title: "Study in China After HSC: Eligibility for Bangladeshi Students",
        description: "Understand how HSC results, subject background, language evidence and CSCA fit into a bachelor application.",
        slug: "study-in-china-after-hsc"
      }
    ]
  },
  {
    id: "english-taught-programs-in-china",
    numericId: "9",
    title: "English-Taught Programs in China: How to Check the Right Degree",
    pageTitle: "English-Taught Programs in China: How to Check the Right Degree | ILP Study",
    searchDescription: "Verify teaching language, entry rules and the international catalogue before choosing an English-taught course.",
    category: "Programs",
    badge: "Student Journal / Programs",
    readTime: "2 min read",
    reviewedDate: "12 October 2026",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    excerpt: "Verify teaching language, entry rules, curriculum and the international catalogue before choosing an English-taught degree in China.",
    leadParagraph: "Start with the international major catalogue. An English university website does not mean every program is taught in English. Look for an international admissions catalogue that identifies the exact degree, teaching medium, campus, duration and intake. Some catalogues combine English, Chinese and mixed-language routes in the same table.",
    sections: [
      {
        heading: "Full programme title matters",
        paragraphs: [
          "Record the program's full name rather than a broad subject label. 'Computer science,' for example, may refer to different degrees or specialisations. Check whether the degree is undergraduate or postgraduate and whether the published option is open to foreign applicants in your intended year."
        ]
      },
      {
        heading: "Use published examples carefully",
        paragraphs: [
          "Use the current international programme catalogue to identify subjects available in English. A course listed for a previous intake does not establish availability, remaining seats or fees for your intended intake.",
          "At another university, an English department may offer an English subject within a degree taught partly in Chinese. Check the medium field and ask about general education modules, assessments and required Chinese courses. For clinical subjects, also ask about the language used during patient-facing training."
        ]
      },
      {
        heading: "Check entry evidence before comparing fees",
        paragraphs: [
          "Ask which English tests are accepted, the minimum overall and section scores, certificate validity and any previous English-medium education alternative. Rules differ by institution. A waiver from one university does not transfer to the next.",
          "For bachelor study, confirm CSCA requirements in the major table. Mathematics and science combinations depend on the program. For postgraduate study, check whether academic background, research experience or supervisor approval is required alongside language evidence."
        ]
      },
      {
        heading: "Compare what you will learn",
        paragraphs: [
          "Read the curriculum, assessment method and specialisations. A low fee is useful only if the degree fits your academic and career goals. Check the awarding institution, campus, internship arrangements and recognition relevant to further study or professional work.",
          "Prepare a comparison with three columns: published fact, official source, and question still unanswered. Put the source intake beside every price and requirement. This makes it easier to recognise outdated information when you revisit the shortlist."
        ]
      },
      {
        heading: "Make a realistic shortlist",
        paragraphs: [
          "Select two or three programs that match both your school or bachelor background and your budget. Ask for clarification on ambiguous language labels before paying any deposit. If no current notice is available, keep the program as a research option rather than a confirmed offer.",
          "ILP Study can help you navigate official information and prepare an application plan. Our university directory lists institution names; it does not imply official representation, confirmed programme availability or assured admission."
        ]
      }
    ],
    relatedGuides: [
      {
        category: "Language",
        title: "Study in China Without IELTS? Understand English Evidence and Waivers",
        description: "Check alternatives, approval conditions and scholarship rules before relying on a language-test waiver.",
        slug: "study-in-china-without-ielts"
      },
      {
        category: "Eligibility",
        title: "Study in China After HSC: Eligibility for Bangladeshi Students",
        description: "Understand how HSC results, subject background, language evidence and CSCA fit into a bachelor application.",
        slug: "study-in-china-after-hsc"
      },
      {
        category: "University Choice",
        title: "How to Choose a City in China for Your Studies",
        description: "Compare academic fit, campus location, accommodation and daily needs before choosing a city.",
        slug: "how-to-choose-a-city-in-china"
      }
    ]
  },
  {
    id: "study-in-china-without-ielts",
    numericId: "10",
    title: "Study in China Without IELTS? Understand English Evidence and Waivers",
    pageTitle: "Study in China Without IELTS? Understand English Evidence and Waivers | ILP Study",
    searchDescription: "Check alternatives, approval conditions and scholarship rules before relying on a language-test waiver.",
    category: "Language",
    badge: "Student Journal / Language",
    readTime: "2 min read",
    reviewedDate: "12 October 2026",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    excerpt: "Understand English proficiency evidence, medium-of-instruction certificates, entrance assessments, and waivers for study in China.",
    leadParagraph: "Ask what the university accepts. 'Without IELTS' is not a complete admission rule. A university may accept another test, previous English-medium study, an interview or an internal assessment. Another may require a specific certificate. The answer depends on the program, degree level, intake and funding route.",
    sections: [
      {
        heading: "Check the admission notice",
        paragraphs: [
          "Start with the current international admission notice. Record the accepted evidence, minimum scores, section requirements and validity period. If a requirement is unclear, ask the admissions office before arranging an application around an exemption."
        ]
      },
      {
        heading: "Medium-of-instruction evidence needs a real basis",
        paragraphs: [
          "A medium-of-instruction certificate explains the language in which your previous education was taught. It should be issued accurately by the relevant institution. It is not a substitute document to create simply because you prefer not to take a test.",
          "Check whether the university accepts your previous school or degree context and whether approval is automatic or assessed individually. Bangladesh nationality alone does not establish an English-language exemption. Keep the university's written response with your submitted evidence."
        ]
      },
      {
        heading: "Look at program-specific alternatives",
        paragraphs: [
          "GDUFS's Autumn 2026 undergraduate notice gives an institute entrance assessment route for applicants without the stated TOEFL or IELTS certificates. That is an example of a published alternative at one institution. It is not proof that all Chinese universities accept interview-only English evidence.",
          "Postgraduate and scholarship routes can have different requirements from self-funded undergraduate admission. If you apply for funding, check the scholarship language rule separately rather than relying only on the degree notice."
        ]
      },
      {
        heading: "Consider readiness as well as eligibility",
        paragraphs: [
          "An exemption may allow an application, but you still need to understand lectures, read academic texts and write assignments. Ask yourself whether you can discuss your subject and follow sustained teaching in English. If you need more preparation, plan it before the course starts.",
          "For a clinical or professionally regulated degree, investigate the language demands of practical training and the requirements of the destination where you intend to work. An English-taught course title does not answer every language question."
        ]
      },
      {
        heading: "Make the enquiry precise",
        paragraphs: [
          "Tell the university your intended major, prior qualification, school or university, teaching language and available evidence. Ask which document it will accept for that exact route. Avoid asking only whether 'IELTS is optional,' because the answer may omit alternative requirements.",
          "ILP Study can help you compare published options and prepare a focused enquiry. If testing remains necessary, allow enough time for preparation, a booking and a possible second attempt. A clear language plan is more reliable than a blanket claim of admission without IELTS."
        ]
      }
    ],
    relatedGuides: [
      {
        category: "Programs",
        title: "English-Taught Programs in China: How to Check the Right Degree",
        description: "Verify teaching language, entry rules and the international catalogue before choosing an English-taught course.",
        slug: "english-taught-programs-in-china"
      },
      {
        category: "Scholarships",
        title: "CSC Scholarship for Bangladesh Students: Find the Correct Application Route",
        description: "Distinguish the current scholarship call, application channel and required documents before applying.",
        slug: "csc-scholarship-for-bangladesh-students"
      },
      {
        category: "Postgraduate",
        title: "Master’s in China from Bangladesh: Build a Focused Application",
        description: "Match your bachelor background, study plan, language evidence and funding route to a suitable master’s program.",
        slug: "masters-in-china-from-bangladesh"
      }
    ]
  },
  {
    id: "chinese-language-course-or-foundation",
    numericId: "11",
    title: "Chinese Language Course or Foundation in China: Which Fits You?",
    pageTitle: "Chinese Language Course or Foundation in China: Which Fits You? | ILP Study",
    searchDescription: "Compare the learning goal, curriculum and progression conditions of two preparation routes.",
    category: "Foundation",
    badge: "Student Journal / Foundation",
    readTime: "2 min read",
    reviewedDate: "12 October 2026",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    excerpt: "Compare the learning goals, curriculum, time commitment and progression conditions of Chinese language courses vs academic foundation programs.",
    leadParagraph: "Begin with the gap you need to close. A preparation course should solve a specific problem. You may need stronger Chinese for a Chinese-taught degree, academic preparation for engineering, or a qualification route the university recognises. Name that need before deciding between language and foundation study.",
    sections: [
      {
        heading: "Language focus vs academic subjects",
        paragraphs: [
          "A Chinese language course focuses on language learning. A foundation course may combine language and academic subjects. The title alone does not tell you the curriculum, entry qualifications or progression rules. Request those details from the institution running the course."
        ]
      },
      {
        heading: "Match the curriculum to your degree",
        paragraphs: [
          "Foundation curricula can include academic subjects, language preparation or both. Review the actual curriculum and teaching language for your intended course rather than assuming all foundation programmes offer the same preparation.",
          "For a language route, ask about your starting class level, placement assessment, weekly teaching and the language result you are working toward. For a foundation route, ask which academic subjects are included and which degrees recognise its completion."
        ]
      },
      {
        heading: "Ask what completion means",
        paragraphs: [
          "Will you receive a non-degree completion certificate? Are you then eligible to apply, conditionally accepted or required to sit another assessment? Does the pathway apply only within the same university? How are qualifications from Bangladesh assessed at bachelor entry?",
          "Keep admission and scholarship progression separate. A route to degree eligibility does not automatically give a route to funded study. Ask for the scholarship notice, selection process and any restrictions for students already enrolled in China."
        ]
      },
      {
        heading: "Compare time and the full cost",
        paragraphs: [
          "A short course and a one-year course can have different effects on your application calendar. Check degree deadlines before booking a preparation place. Include accommodation, living costs and any extra semester needed if you miss a target score.",
          "For an SSC or O Level student, confirm both entry to preparation and acceptance for the later degree. For an HSC graduate who already meets degree conditions, consider whether preparation offers enough educational benefit to justify the additional cost."
        ]
      },
      {
        heading: "Choose with a measurable goal",
        paragraphs: [
          "Write your goal as an outcome: reach the required language score, complete defined mathematics preparation, or fulfil a documented progression condition. Ask how progress is assessed and what alternative exists if you do not meet the goal.",
          "ILP Study can help compare course notices against your results and intended degree. The most suitable route is the one with a clear purpose, realistic timeline and written conditions that you understand—not simply the course with the most attractive scholarship slogan."
        ]
      }
    ],
    relatedGuides: [
      {
        category: "Foundation",
        title: "Foundation in China After SSC or O Levels: What to Verify",
        description: "Check qualification acceptance and progression conditions before choosing a pre-university route.",
        slug: "foundation-in-china-after-ssc-or-o-levels"
      },
      {
        category: "Intakes",
        title: "March or September Intake in China: Plan the Right Sequence",
        description: "Understand preparation timing and degree deadlines before planning a March-to-September pathway.",
        slug: "march-or-september-intake-in-china"
      },
      {
        category: "CSCA",
        title: "A Four-Week CSCA Study Plan for Busy HSC Students",
        description: "An illustrative four-week CSCA revision routine for HSC students, with syllabus checks, concept review and examination-day preparation.",
        slug: "four-week-csca-study-plan"
      }
    ]
  },
  {
    id: "march-or-september-intake-in-china",
    numericId: "12",
    title: "March or September Intake in China: Plan the Right Sequence",
    pageTitle: "March or September Intake in China: Plan the Right Sequence | ILP Study",
    searchDescription: "Understand preparation timing and degree deadlines before planning a March-to-September pathway.",
    category: "Intakes",
    badge: "Student Journal / Intakes",
    readTime: "2 min read",
    reviewedDate: "12 October 2026",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    excerpt: "Understand course options, preparation timing and degree deadlines before deciding between March and September intakes in China.",
    leadParagraph: "Choose the course before the month. March and September are useful planning labels, but they are not universal admission offers. A university may open a spring language course while offering a degree only in autumn. Another may accept different programs at different times. Start with the exact course notice and its teaching dates.",
    sections: [
      {
        heading: "Who benefits from March preparation?",
        paragraphs: [
          "For a Bangladeshi HSC graduate, a March preparation course can be worth exploring if it addresses a genuine language or academic need. For a student already meeting degree entry requirements, direct application may be the more relevant route. More time in China is not automatically the best route for every student."
        ]
      },
      {
        heading: "Check each stage separately",
        paragraphs: [
          "A published spring language intake is separate from a later degree intake. Confirm the course dates and application deadline for each stage. A spring course does not by itself confirm a September degree place or scholarship.",
          "Use an intake-specific source for each stage of your plan. If a spring preparation page is current but the autumn degree notice is not published, label the degree target as a plan awaiting confirmation."
        ]
      },
      {
        heading: "Work backward from the degree deadline",
        paragraphs: [
          "Put the intended degree application deadline, CSCA dates, language evidence deadline and final-document deadline on one calendar. Then add the preparation course dates. If degree applications close before preparation ends, ask how the university handles incomplete language or course results.",
          "Scholarship deadlines may come before the degree deadline. Do not assume you can wait until September to apply for September funding. A course ending in June may help learning but still require you to submit another application months earlier."
        ]
      },
      {
        heading: "Check progression in writing",
        paragraphs: [
          "Ask whether preparation completion gives direct progression, conditional progression or simply eligibility to apply. Find the grades, language scores, tests and review process required. Keep separate records for the preparation course and the degree application.",
          "Claims that most scholarship seats go to existing language students need current institution-specific evidence. Do not rely on that statement as a general rule when deciding to spend money on a preparation course."
        ]
      },
      {
        heading: "Make two versions of your plan",
        paragraphs: [
          "Plan A can target the next degree intake if the required results and deadlines align. Plan B should explain what happens if you need more preparation or funding is not granted. Include the cost of extra months and any new application.",
          "Bring that calendar to ILP Study. We can help you identify timing gaps and the questions to confirm with the university. A clear sequence is more useful than a promise that one intake automatically leads to the next."
        ]
      }
    ],
    relatedGuides: [
      {
        category: "Foundation",
        title: "Chinese Language Course or Foundation in China: Which Fits You?",
        description: "Compare the learning goal, curriculum and progression conditions of two preparation routes.",
        slug: "chinese-language-course-or-foundation"
      },
      {
        category: "Foundation",
        title: "Foundation in China After SSC or O Levels: What to Verify",
        description: "Check qualification acceptance and progression conditions before choosing a pre-university route.",
        slug: "foundation-in-china-after-ssc-or-o-levels"
      },
      {
        category: "Scholarships",
        title: "Full Scholarship or Tuition Waiver? How to Read a China Offer",
        description: "Understand award coverage, payment timing and renewal before relying on scholarship headlines.",
        slug: "full-scholarship-or-tuition-waiver"
      }
    ]
  },
  {
    id: "masters-in-china-from-bangladesh",
    numericId: "13",
    title: "Master’s in China from Bangladesh: Build a Focused Application",
    pageTitle: "Master’s in China from Bangladesh: Build a Focused Application | ILP Study",
    searchDescription: "Match your bachelor background, study plan, language evidence and funding route to a suitable master’s program.",
    category: "Postgraduate",
    badge: "Student Journal / Postgraduate",
    readTime: "2 min read",
    reviewedDate: "12 October 2026",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    excerpt: "Match your bachelor background, study plan, language evidence and funding route to a suitable master's program in China.",
    leadParagraph: "Choose the program by academic fit. A master's shortlist should begin with your bachelor degree and the direction you want to develop. If you are changing fields, check the prerequisite knowledge and whether the program accepts that transition. A course with an attractive scholarship is not automatically a suitable academic match.",
    sections: [
      {
        heading: "Review degree title and curriculum",
        paragraphs: [
          "Read the degree title, curriculum and teaching language. Compare taught and research expectations, course duration, dissertation requirements and the campus. Ask what preparation a student from your previous field may need."
        ]
      },
      {
        heading: "Establish the actual application requirements",
        paragraphs: [
          "Use the international postgraduate notice, not a domestic graduate examination page. Check degree and transcript requirements, language evidence, recommendations, study-plan instructions and any research proposal. If a supervisor acceptance letter is requested, confirm its format and role in the process.",
          "A postgraduate scholarship route may require both university and scholarship applications, recommendations, a research plan or supervisor-related documents. Check the current instructions for your intended route; another university's checklist or a past cycle is not a substitute."
        ]
      },
      {
        heading: "Write a study plan with substance",
        paragraphs: [
          "Explain your academic background, a problem or area you want to investigate, why the chosen program fits, and what skills you hope to build. Use a concrete example from coursework, a project or relevant work to support your interest.",
          "Avoid generic praise of China or a university ranking. If you mention a faculty member, describe the actual connection to your proposed work. Do not claim publications, research methods or experience that you do not have."
        ]
      },
      {
        heading: "Request useful recommendations",
        paragraphs: [
          "Choose referees who can discuss your academic work and readiness for advanced study. Give them the program information, your CV, relevant project details and enough time to prepare. Keep the letter requirements and submission method clear.",
          "Where the university asks for direct reference submission, respect that process. Use authentic documents and keep your own application accessible so you can respond promptly to academic questions or an interview request."
        ]
      },
      {
        heading: "Plan funding and timing together",
        paragraphs: [
          "Scholarship and degree deadlines may differ. Put both on your calendar along with certificate preparation and language testing. Read funding coverage and continuation conditions, and decide whether you would accept a self-funded offer.",
          "Before a consultation, prepare your bachelor transcript, graduation status, CV, intended field and any draft study plan. ILP Study can help you compare published routes and organise questions for the university. A focused application explains both your eligibility and your academic purpose; it does not rely on a guaranteed award claim."
        ]
      }
    ],
    relatedGuides: [
      {
        category: "Scholarships",
        title: "CSC Scholarship for Bangladesh Students: Find the Correct Application Route",
        description: "Distinguish the current scholarship call, application channel and required documents before applying.",
        slug: "csc-scholarship-for-bangladesh-students"
      },
      {
        category: "Language",
        title: "Study in China Without IELTS? Understand English Evidence and Waivers",
        description: "Check alternatives, approval conditions and scholarship rules before relying on a language-test waiver.",
        slug: "study-in-china-without-ielts"
      },
      {
        category: "Applications",
        title: "China University Application Documents: A Bangladesh Student Checklist",
        description: "Organise accurate documents, readable scans and intake-specific requirements before submission.",
        slug: "china-university-application-documents"
      }
    ]
  },
  {
    id: "mbbs-in-china-for-bangladesh-students",
    numericId: "14",
    title: "MBBS in China for Bangladesh Students: What to Check Before Applying",
    pageTitle: "MBBS in China for Bangladesh Students: What to Check Before Applying | ILP Study",
    searchDescription: "Separate admission, degree details, clinical training and professional recognition when comparing MBBS options.",
    category: "Medicine",
    badge: "Student Journal / Medicine",
    readTime: "2 min read",
    reviewedDate: "12 October 2026",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    excerpt: "Separate university admission, clinical training, BMDC requirements and professional licensing before applying for MBBS in China.",
    leadParagraph: "Begin with the profession you intend to enter. For MBBS, university admission is only one part of the decision. A Bangladeshi applicant should investigate the current Bangladesh Medical and Dental Council (BMDC) requirements relevant to overseas medical study and later registration. If you intend to practise elsewhere, investigate that country's regulator too.",
    sections: [
      {
        heading: "Consult professional regulators directly",
        paragraphs: [
          "Do not treat a consultancy's recognition statement or an old university list as a personal licensing decision. Ask the regulator about your intended qualification and circumstances before committing funds. This guide is a planning checklist, not confirmation of professional eligibility."
        ]
      },
      {
        heading: "Verify the actual international program",
        paragraphs: [
          "Read the university's current English-medium clinical medicine notice. Check the qualification awarded, course length, campus, internship arrangements and academic prerequisites. Do not substitute a rehabilitation, nursing or general medicine-school page for an MBBS admission guide.",
          "Check the intended medical programme's published duration, internship arrangements, teaching language and required entrance assessments. Confirm the applicable CSCA subjects for the exact programme and intake rather than using another institution's rules."
        ]
      },
      {
        heading: "Understand clinical learning",
        paragraphs: [
          "Ask where practical training takes place, what language is used with patients and what Chinese learning is required before clinical work. Clarify attendance, progression assessments and the conditions for internship placement. Find out how any overseas internship option is evaluated and documented.",
          "Read the curriculum with a parent or adviser. A degree title alone does not show how teaching, hospital exposure and assessment fit together. Ask the university directly when a marketing description leaves practical questions unanswered."
        ]
      },
      {
        heading: "Build the complete financial plan",
        paragraphs: [
          "Include the whole course duration and the internship year. Check whether tuition changes during internship, whether housing remains available and which compulsory costs are additional. Avoid assuming a scholarship applies to MBBS simply because the university offers funding for other subjects.",
          "Consider what happens if you need to repeat study or return home unexpectedly. Ask for refund rules and the process for withdrawing or transferring. Keep copies of all written answers and payment documents."
        ]
      },
      {
        heading: "Use a decision checklist",
        paragraphs: [
          "Before applying, verify academic eligibility, language evidence, CSCA subjects, the specific program, professional recognition questions and the family budget. Before paying, verify the official recipient and acceptance conditions.",
          "ILP Study can help organise university information and your application questions. Medical licensing and registration decisions belong to the relevant regulator. Choose a program only when both the academic route and your intended professional route are sufficiently clear to make an informed commitment."
        ]
      }
    ],
    relatedGuides: [
      {
        category: "Eligibility",
        title: "Study in China After HSC: Eligibility for Bangladeshi Students",
        description: "Understand how HSC results, subject background, language evidence and CSCA fit into a bachelor application.",
        slug: "study-in-china-after-hsc"
      },
      {
        category: "Costs",
        title: "Study in China Cost from Bangladesh: Build a Complete Budget",
        description: "A practical budget method covering university bills, monthly living expenses and one-time costs.",
        slug: "study-in-china-cost-from-bangladesh"
      },
      {
        category: "Scholarships",
        title: "Full Scholarship or Tuition Waiver? How to Read a China Offer",
        description: "Understand award coverage, payment timing and renewal before relying on scholarship headlines.",
        slug: "full-scholarship-or-tuition-waiver"
      }
    ]
  },
  {
    id: "study-in-china-after-hsc",
    numericId: "15",
    title: "Study in China After HSC: Eligibility for Bangladeshi Students",
    pageTitle: "Study in China After HSC: Eligibility for Bangladeshi Students | ILP Study",
    searchDescription: "Understand how HSC results, subject background, language evidence and CSCA fit into a bachelor application.",
    category: "Eligibility",
    badge: "Student Journal / Eligibility",
    readTime: "2 min read",
    reviewedDate: "12 October 2026",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    excerpt: "Understand how HSC results, subject prerequisites, language proof, and CSCA test scores determine bachelor admission eligibility in China.",
    leadParagraph: "HSC completion is a starting point. If you have completed HSC in Bangladesh, the next question is whether your qualification and subjects meet the chosen university's international bachelor requirements. There is no useful single GPA threshold for every degree in China. Universities can set different academic, age and language conditions, and some programs require particular school subjects.",
    sections: [
      {
        heading: "SSC & HSC Subject backgrounds",
        paragraphs: [
          "Start with the full SSC and HSC transcripts. A science applicant should identify which mathematics and science courses appear on the record. A humanities or business applicant should check whether the intended degree accepts that background. Do not interpret a subject's English name as evidence that it is taught in English."
        ]
      },
      {
        heading: "Check the exact academic route",
        paragraphs: [
          "Read the section for foreign undergraduate applicants and the relevant major table. If a notice gives a percentage or a four-point GPA, ask how the university evaluates your Bangladesh result. A consultancy should not invent an equivalence or round a grade upward to make an application appear eligible.",
          "Medical applicants should check the specific programme's science prerequisites, academic criteria and age rules. Requirements for medicine should not be treated as entry rules for business, engineering or another institution."
        ]
      },
      {
        heading: "Treat language and CSCA as separate requirements",
        paragraphs: [
          "For an English-taught program, establish which test or previous-school instruction evidence is accepted. For Chinese-taught study, check the HSK level and score. Then check CSCA subjects and the language of the test papers for the major. Passing one requirement does not necessarily replace another.",
          "If you have not taken an accepted language test, ask about the university's published alternatives rather than assuming an exemption. If you are still awaiting final results, check whether a pre-graduation certificate is allowed and when the final diploma must be supplied."
        ]
      },
      {
        heading: "Compare direct entry with preparation",
        paragraphs: [
          "A language course can support Chinese learning. A foundation course may include academic preparation. Choose a preparatory route only after understanding its entry qualifications, duration, progression assessment and the degree you intend to pursue afterward. The course fee buys preparation; it does not automatically buy a future scholarship."
        ]
      },
      {
        heading: "Make your eligibility enquiry useful",
        paragraphs: [
          "Send the admissions office a focused question with your qualification, subjects, graduation year and intended major. Avoid asking only, 'Can I get a full scholarship?' Eligibility comes before funding competition.",
          "For an ILP consultation, prepare your transcripts, target subject, language evidence and annual family budget. We can help identify requirements that are already clear and questions that need a written university answer. You should be able to explain why each shortlisted degree fits your background before submitting an application."
        ]
      }
    ],
    relatedGuides: [
      {
        category: "Programs",
        title: "English-Taught Programs in China: How to Check the Right Degree",
        description: "Verify teaching language, entry rules and the international catalogue before choosing an English-taught course.",
        slug: "english-taught-programs-in-china"
      },
      {
        category: "CSCA",
        title: "CSCA for Bangladeshi Students: Check Subjects Before You Prepare",
        description: "Check CSCA subjects, test language, registration arrangements and university requirements before preparing from Bangladesh.",
        slug: "csca-for-bangladeshi-students"
      },
      {
        category: "Foundation",
        title: "Chinese Language Course or Foundation in China: Which Fits You?",
        description: "Compare the learning goal, curriculum and progression conditions of two preparation routes.",
        slug: "chinese-language-course-or-foundation"
      }
    ]
  },
  {
    id: "study-in-china-cost-from-bangladesh",
    numericId: "16",
    title: "Study in China Cost from Bangladesh: Build a Complete Budget",
    pageTitle: "Study in China Cost from Bangladesh: Build a Complete Budget | ILP Study",
    searchDescription: "A practical budget method covering university bills, monthly living expenses and one-time costs.",
    category: "Costs",
    badge: "Student Journal / Costs",
    readTime: "2 min read",
    reviewedDate: "12 October 2026",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    excerpt: "A practical budget method covering university bills, accommodation, monthly living costs and one-time travel expenses for Bangladeshi families.",
    leadParagraph: "Begin with the fee period. When comparing study costs in China, check whether a price is per semester, per academic year, per month or for the complete course. RMB and CNY refer to China's currency. Keep your working budget in that currency first, then calculate what your family will need in Bangladeshi taka using the actual payment-date exchange rate and bank charges.",
    sections: [
      {
        heading: "A scholarship percentage is not a complete budget",
        paragraphs: [
          "Even a full tuition waiver can leave accommodation, insurance, flights, documents and living expenses to pay. Build a self-funded scenario and a funded scenario separately so your family can see the difference."
        ]
      },
      {
        heading: "Use this four-part budget",
        paragraphs: [
          "University bills include tuition, accommodation, application or registration charges and other compulsory fees. Monthly spending includes food, transport, phone, utilities and personal essentials. One-time preparation includes document work, examinations, visa expenses and travel. A contingency covers unexpected costs and changes in your plan.",
          "Ask whether room charges are per person or per room and whether utilities are included. Check the number of months payable, deposits, vacation access and off-campus alternatives if a university room is unavailable."
        ]
      },
      {
        heading: "An illustrative calculation",
        paragraphs: [
          "Suppose a hypothetical program costs RMB 20,000 per year, housing costs RMB 5,000, monthly living spending is RMB 1,500 and one-time costs are RMB 6,000. A twelve-month planning budget is 20,000 + 5,000 + (1,500 × 12) + 6,000 = RMB 49,000 before contingency.",
          "These numbers are a teaching example, not a quotation for a real university. If a confirmed award covers tuition only, the same example still leaves RMB 29,000 before contingency. If you plan a shorter course, use its actual duration instead of automatically multiplying living costs by twelve."
        ]
      },
      {
        heading: "Confirm your university fee schedule",
        paragraphs: [
          "Read the university's current fee schedule rather than treating tuition as the complete cost. Our tuition page shows indicative planning ranges, not confirmed current university quotations. Confirm exact tuition, accommodation, compulsory charges and payment timing for your intake.",
          "Plan when money is needed: Some payments are required before travel, others at registration. Ask when a scholarship is credited and whether tuition must be paid first. Keep enough liquidity for the first weeks even if ongoing support is expected. Request written refund conditions before paying."
        ]
      },
      {
        heading: "Your family planning meeting",
        paragraphs: [
          "Agree a realistic annual ceiling and decide what happens if an award is not granted or renewed. Use ILP's editable budget planner with your verified figures. Save the source notice, payment schedule and your calculation together. A transparent budget helps you choose a program you can sustain, not just afford on the first day."
        ]
      }
    ],
    relatedGuides: [
      {
        category: "Scholarships",
        title: "Full Scholarship or Tuition Waiver? How to Read a China Offer",
        description: "Understand award coverage, payment timing and renewal before relying on scholarship headlines.",
        slug: "full-scholarship-or-tuition-waiver"
      },
      {
        category: "Getting Started",
        title: "Study in China from Bangladesh: Your Application Roadmap",
        description: "A practical sequence for choosing a course, checking eligibility and preparing a complete application.",
        slug: "study-in-china-from-bangladesh-roadmap"
      },
      {
        category: "Visa and Arrival",
        title: "China Student Visa from Bangladesh: Prepare Your Questions and Arrival Plan",
        description: "Understand study-visa categories and organise the current local instructions before arranging travel.",
        slug: "china-student-visa-from-bangladesh"
      }
    ]
  },
  {
    id: "study-in-china-from-bangladesh-roadmap",
    numericId: "17",
    title: "Study in China from Bangladesh: Your Application Roadmap",
    pageTitle: "Study in China from Bangladesh: Your Application Roadmap | ILP Study",
    searchDescription: "A practical sequence for choosing a course, checking eligibility and preparing a complete application.",
    category: "Getting Started",
    badge: "Student Journal / Getting Started",
    readTime: "2 min read",
    reviewedDate: "12 October 2026",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    excerpt: "A practical step-by-step roadmap for Bangladeshi students: choosing a course, checking entry rules, and submitting a winning university application.",
    leadParagraph: "Begin with a decision, not a university name. Studying in China from Bangladesh starts with choosing what you want your qualification to achieve. An HSC graduate exploring computer science has different questions from a business graduate applying for a research master's. Write down your intended degree, subject, teaching language and target intake before collecting brochures.",
    sections: [
      {
        heading: "Create a one-page student profile",
        paragraphs: [
          "Record SSC and HSC or equivalent results, subjects studied, graduation dates, any study gap, passport status and English or Chinese evidence. Add the amount your family can spend without an unconfirmed scholarship. This gives you a useful basis for a consultation and stops an attractive headline from deciding the whole plan."
        ]
      },
      {
        heading: "Build a shortlist you can explain",
        paragraphs: [
          "Choose a small number of programs and compare the same fields for each: degree title, teaching language, duration, academic prerequisites, examination requirements, tuition, accommodation and application deadline. Read the international catalogue, not just the university homepage. A university may offer a subject domestically without opening it to international applicants.",
          "Our university directory groups institution names by province and city. A name in the directory is a research starting point, not a confirmed programme offer. Check the current international admissions catalogue before applying."
        ]
      },
      {
        heading: "Separate the three decisions",
        paragraphs: [
          "Admission, scholarship selection and a student visa are different processes. An admission offer is not automatically a scholarship award. A scholarship recommendation is not a visa. Keep separate folders and deadlines for each stage so that a missing funding document does not delay an otherwise complete application.",
          "For undergraduate study, check the chosen university's CSCA subjects. For postgraduate study, investigate recommendations, the study or research plan and any supervisor requirement. Never assume another student's requirements apply to your course."
        ]
      },
      {
        heading: "Prepare, review and then submit",
        paragraphs: [
          "Use a document checklist against the exact notice. Check names, dates, grades and translations for consistency. Keep the original files and a final submitted copy. Use your own accessible email and record the application reference so you can follow official messages yourself.",
          "After submission, read requests for additional information promptly. Before paying a deposit, confirm the recipient, refund conditions, reporting date and what happens if funding is not awarded. ILP Study can help you organise this work and understand the questions to ask; the relevant university and authorities make the final decisions."
        ]
      },
      {
        heading: "Your next practical step",
        paragraphs: [
          "Bring your student profile and two or three intended subjects to a consultation. Ask for a shortlist with a clear reason for each option and the current official source. A good first outcome is a realistic plan you understand—not simply a long list of universities."
        ]
      }
    ],
    relatedGuides: [
      {
        category: "Eligibility",
        title: "Study in China After HSC: Eligibility for Bangladeshi Students",
        description: "Understand how HSC results, subject background, language evidence and CSCA fit into a bachelor application.",
        slug: "study-in-china-after-hsc"
      },
      {
        category: "Costs",
        title: "Study in China Cost from Bangladesh: Build a Complete Budget",
        description: "A practical budget method covering university bills, monthly living expenses and one-time costs.",
        slug: "study-in-china-cost-from-bangladesh"
      },
      {
        category: "Applications",
        title: "China University Application Documents: A Bangladesh Student Checklist",
        description: "Organise accurate documents, readable scans and intake-specific requirements before submission.",
        slug: "china-university-application-documents"
      }
    ]
  },
  {
    id: "universities-in-guangzhou",
    numericId: "18",
    title: "Universities in Guangzhou: A Research Guide for Bangladesh Students",
    pageTitle: "Universities in Guangzhou: A Research Guide for Bangladesh Students | ILP Study",
    searchDescription: "Explore official international admission references in Guangzhou and build a course-first shortlist.",
    category: "University Choice",
    badge: "Student Journal / University Choice",
    readTime: "2 min read",
    reviewedDate: "12 October 2026",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    excerpt: "Explore official international admission references, campuses and living considerations in Guangzhou for Bangladeshi students.",
    leadParagraph: "Start with the kind of study you need. The directory includes Guangzhou institutions alongside other cities in China. The useful distinction is between degree study, Chinese language study and academic preparation. Choose your goal before collecting university names.",
    sections: [
      {
        heading: "Degree vs language vs preparation",
        paragraphs: [
          "A student seeking an English-taught bachelor, a student preparing Chinese and a medical applicant need different catalogues. Organise the comparison around the actual international program rather than treating every institution as an interchangeable option."
        ]
      },
      {
        heading: "Preparation routes worth researching",
        paragraphs: [
          "Compare language courses with foundation preparation by checking curriculum, accepted qualifications, teaching language and progression conditions. Course titles alone do not establish suitability or future degree eligibility.",
          "Confirm the new intake before applying. A course described in a 2026 notice should remain a reference until the university publishes or confirms the dates and fees you need. Preparation completion should not be presented as automatic degree or scholarship admission."
        ]
      },
      {
        heading: "Degree routes need a major-level check",
        paragraphs: [
          "Explore Guangzhou institutions through the updated directory, then check the international admissions information for your intended programme. Teaching language, academic prerequisites and assessment rules differ between institutions and intakes.",
          "For each shortlisted degree, record the exact title, medium, campus, duration and required subjects. Check whether the notice is for foreign nationals or a different admission scheme such as overseas Chinese, Hong Kong, Macao or Taiwan applicants."
        ]
      },
      {
        heading: "Check where you will actually live",
        paragraphs: [
          "Universities can operate more than one campus, including locations outside the city label used in a directory. Ask for the teaching and accommodation addresses for your program. Compare how you will travel between housing, classrooms and any practical placements.",
          "Request information about dormitory availability and campus food options. For a Bangladeshi family, an exact room and living-cost plan is more useful than a broad claim that Guangzhou is affordable or convenient."
        ]
      },
      {
        heading: "Make your shortlist manageable",
        paragraphs: [
          "Pick two or three options that match your academic profile and budget. Attach the official source to each and write down unanswered questions. You may decide that one university is ready for application while another remains a research lead.",
          "ILP's geographic directory lists university information independently. It does not imply that every institution is an official ILP partner. Bring your results and intended subject to a consultation so we can help turn the city list into a focused program comparison."
        ]
      }
    ],
    relatedGuides: [
      {
        category: "University Choice",
        title: "How to Choose a City in China for Your Studies",
        description: "Compare academic fit, campus location, accommodation and daily needs before choosing a city.",
        slug: "how-to-choose-a-city-in-china"
      },
      {
        category: "Programs",
        title: "English-Taught Programs in China: How to Check the Right Degree",
        description: "Verify teaching language, entry rules and the international catalogue before choosing an English-taught course.",
        slug: "english-taught-programs-in-china"
      },
      {
        category: "Foundation",
        title: "Chinese Language Course or Foundation in China: Which Fits You?",
        description: "Compare the learning goal, curriculum and progression conditions of two preparation routes.",
        slug: "chinese-language-course-or-foundation"
      }
    ]
  }
];

export function getGuideByIdOrSlug(identifier: string): StudentGuide | undefined {
  return studentGuides.find(
    (g) => g.id === identifier || g.numericId === identifier
  );
}
