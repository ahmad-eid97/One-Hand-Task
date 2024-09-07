//= Components
import Navbar from "@/components/Shared/Navbar";
import LoginWrapper from "@/components/Auth/Login";
//= Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Task | Login',
  description: 'One hand task website login page',
}

export default async function Login() {
  return (
    <>
      <Navbar />
      <LoginWrapper />
    </>
  )
}
