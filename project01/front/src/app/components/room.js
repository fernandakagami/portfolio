import { Icon } from '@iconify/react';

export default function Room({ room }) {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex mx-auto mb-5">
      <div className="h-96 lg:h-64 lg:w-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${room.photo})`, backgroundPosition: "center" }}>
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
        <div className="flex justify-between items-center">
          <div className="text-gray-900 font-bold text-xl">{room.name}</div>
          <p className="text-gray-600 text-lg">R$ {room.price}</p>
        </div>
        <div className='flex justify-start items-center gap-2'>
          {
            room.fan ? <div className='flex justify-start items-center bg-gray-200 px-2 py-1 rounded-full text-sm'><Icon icon="material-symbols:toys-fan" width="20"></Icon><span className='ms-1'>Ventilador</span></div> : null
          }
          {
            room.air_conditioning ? <div className='flex justify-start items-center bg-gray-200 px-2 py-1 rounded-full text-sm'><Icon icon="ic:twotone-air" width='20'></Icon><span className='ms-1'>Ar condicionado</span></div> : null
          }
          {
            room.mini_bar ? <div className='flex justify-start items-center bg-gray-200 px-2 py-1 rounded-full text-sm'><Icon icon="arcticons:freezer" width='20'></Icon><span className='ms-1'>Frigobar</span></div> : null
          }
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <h1>Quantidade de Hóspedes</h1>
            <p className="text-gray-900 leading-none flex justify-start items-center mb-4"><Icon icon="fa-solid:users" width="25"></Icon><span className='ms-2 text-lg'>{room.guests}</span></p>
          </div>
        </div>
        <div className='flex justify-end items-center'>
          <button className='px-14 py-2 bg-[#24AB70] text-white rounded'>Editar</button>
        </div>
      </div>
    </div >
  )
}