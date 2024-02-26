"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios";
import Booking from '../components/booking';

export default function booking() {
  const [booking, setBooking] = useState([]);

  async function fetchBooking() {
    await axios.get("http://127.0.0.1:8000/api/booking")
      .then((response) => {
        console.log(response.data)
        setBooking(response.data)
      }).catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchBooking()
  }, [])

  return (
    <>
      <div className='container mx-auto mt-8 max-w-4xl'>
        <div className="mb-5 text-end">
          <Link href="/booking/create" className="border-2 border-[#24AB70] px-3 py-1 rounded">Cadastrar uma reserva</Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {
            booking.map((room) => (
              <Booking key={room.id} booking={room}></Booking>
            ))
          }
        </div>
      </div>
    </>

  )
}