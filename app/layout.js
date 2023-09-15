import './globals.css'
import { Inter, DM_Sans } from 'next/font/google'

const dm_sans = DM_Sans({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Moviebox - Watch the latest and trending movies for free!",
    template: "%s | Moviebox",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>{children}</body>
    </html>
  )
}
