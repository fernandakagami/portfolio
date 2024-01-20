import { Open_Sans } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const open = Open_Sans({ weight: ['400', '700'], subsets: ['latin'] });


export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={open.className}>
        <ul className="flex justify-center pt-36">
          <li className="mr-5 cursor-pointer" style={{ color: "#222222" }}>
            <Link href="/">Home</Link>
          </li>
          <li className="mr-5 cursor-pointer" style={{ color: "#222222" }}>
            <Link href="/">Reservas</Link>
          </li>
          <li className="cursor-pointer" style={{ color: "#222222" }}>
            <Link href="/">Quartos</Link>
          </li>
        </ul>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
