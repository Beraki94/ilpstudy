import { redirect } from 'next/navigation';

export default function TuitionRedirectPage() {
  redirect('/universities#tuition');
}
