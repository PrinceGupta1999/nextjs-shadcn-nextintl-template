// Redirect to en/404 - the default not found page

import { redirect } from 'next/navigation';

export default function NotFound() {
  redirect('/en/404');
}
