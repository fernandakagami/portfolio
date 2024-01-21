import { Open_Sans } from 'next/font/google';
import './globals.css';

import Menu from '../app/components/menu.js';

const open = Open_Sans({ weight: ['400', '700'], subsets: ['latin'] });
export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={open.className}>
        <Menu />
        <main>
          {children}
        </main>
      </body>
    </html >
  )
}
