"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios";
import Room from '../components/room';

export default function rooms() {
  const [rooms, setRooms] = useState([]);

  async function fetchRooms() {
    await axios.get("http://127.0.0.1:8000/api/room")
      .then((response) => {
        console.log(response.data)
        setRooms(response.data)
      }).catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchRooms()
  }, [])

  return (
    <>
      <div className='container mx-auto mt-8 max-w-4xl'>
        <div className="mb-5 text-end">
          <Link href="/rooms/create" className="border-2 border-[#24AB70] px-3 py-1 rounded">Cadastrar um quarto</Link>
        </div>
        <div>
          {
            rooms.map((room) => (
              <Room key={room.id} room={room}></Room>
            ))
          }
        </div>
      </div>
    </>

  )
}