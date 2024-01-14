import { Open_Sans } from 'next/font/google';

import room from '../assets/img/room1.jpg';
import Bar from './components/bar';

const open = Open_Sans({ weight: ['400', '700'], subsets: ['latin'] });

export default function Home() {
  return (
    <div className={open.className}>
      <div className="flex min-h-screen flex-col justify-center items-center px-20 py-10">
        <main className='w-screen flex justify-center flex-col' style={{ height: 'calc(100vh - 150px)' }}>
          <header className='mb-10' style={{ margin: "0 auto 20px" }}>
            <nav>
              <ul className="flex">
                <li className="mr-5 cursor-pointer" style={{ color: "#222222" }}>Reservas</li>
                <li className="cursor-pointer" style={{ color: "#222222" }}>Quartos</li>
              </ul>
            </nav>
          </header>
          <div className='flex flex-row px-20' style={{ height: '80%' }}>
            <div className='w-6/12' style={{ backgroundColor: "rgba(36, 171, 112, 0.04)", borderRadius: "50px 0 0 0" }}>
              <h1 className='mt-24 ml-16 text-5xl'>Ache as reservas</h1>
            </div>
            <div className='w-6/12 bg-cover' style={{ backgroundImage: `url(${room.src})`, borderRadius: "0 50px 0 0" }}>
            </div>
          </div>
        </main >
        <Bar />
      </div >
    </div>
  )
}
