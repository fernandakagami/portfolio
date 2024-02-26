'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Menu() {
  const pathname = usePathname();

  return (
    <ul className={`flex justify-center ${pathname == '/' ? "pt-36" : "pt-10"}`}>
      <li className="mr-5 cursor-pointer" style={{ color: "#222222" }}>
        <Link href="/">Home</Link>
      </li>
      <li className="mr-5 cursor-pointer" style={{ color: "#222222" }}>
        <Link href="/booking">Reservas</Link>
      </li>
      <li className="cursor-pointer" style={{ color: "#222222" }}>
        <Link href="/rooms">Quartos</Link>
      </li>
    </ul>
  )
}