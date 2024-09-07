import { Toaster } from 'sonner';
//= Types
import type { Metadata } from 'next';
//= Styles
import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'One hand task',
  description: 'One hand task website',
  icons: {
    icon: '/imgs/logo.svg',
    shortcut: '/imgs/logo.svg'
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Toaster
          position="bottom-center"
          toastOptions={{ duration: 5000 }}
        />
        {children}
      </body>
    </html>
  )
}
