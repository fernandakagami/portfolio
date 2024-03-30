import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Room({ booking }) {
  return (
    <Link href={`/booking/update/${booking.id}`}>
      <div className="rounded overflow-hidden shadow-lg">
          <Image className="w-full" src={booking.room.photo} alt={booking.room.name} width={200} height={100}/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-5">{booking.room.name}</div>
            <p className='flex flex-row justify-start items-center mb-2'><Icon icon="ri:user-fill" className="text-[#24AB70] text-2xl" /> {booking.guests}
            </p>
            <div className='flex flex-row justify-start items-center'>
              <p className='flex flex-row justify-start items-center me-5'><Icon icon="clarity:calendar-line" className="text-[#24AB70] text-2xl me-2" />
                { booking.initial_date }
              </p>
              <p className='flex flex-row justify-start items-center'><Icon icon="clarity:calendar-line" className="text-[#24AB70] text-2xl me-2" />
                { booking.final_date }
              </p>
            </div>
          </div>
        </div>
    </Link>

  )
}