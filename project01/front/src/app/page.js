import room from '../assets/img/room1.jpg';
import Bar from './components/bar';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <main className='w-screen flex justify-start flex-col mt-8 sm:max-w-5xl mx-auto' style={{ height: 'calc(100vh - 19rem)' }}>
        <div className='flex flex-row' style={{ height: '80%' }}>
          <div className='w-6/12' style={{ backgroundColor: "rgba(36, 171, 112, 0.04)", borderRadius: "50px 0 0 0" }}>
            <h1 className='mt-24 ml-16 mr-4 text-5xl'>Todas as suas reservas em um só lugar</h1>
          </div>
          <div className='w-6/12 bg-cover' style={{ backgroundImage: `url(${room.src})`, borderRadius: "0 50px 0 0" }}>
          </div>
        </div>
      </main >
      <Bar />
    </div >
  )
}
