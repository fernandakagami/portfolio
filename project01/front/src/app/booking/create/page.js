"use client"
import axios from "axios";
import { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import Link from "next/link";
import Image from "next/image";
import DatePicker from "react-datepicker";
import { useRouter } from 'next/navigation';
import "react-datepicker/dist/react-datepicker.css"

export default function Create() {  
  const router = useRouter();
  const [rooms, setRooms] = useState([]);
  const [attributes, setAtributes] = useState({
    initial_date: new Date(),
    final_date: new Date(),
    room_id: "", 
  }); 

  async function fetchRooms() {
    await axios.get("http://127.0.0.1:8000/api/room")
      .then((response) => {        
        setRooms(response.data)              
      }).catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchRooms()
  }, [])    

  const updateAttributes = (value, field) => {
    setAtributes(attributes => ({ ...attributes, [field]: value }));
  };

  async function onSubmit(event) {
    event.preventDefault()    
    await axios.post("http://127.0.0.1:8000/api/booking/", attributes)
    .then(() => {
        router.push('/booking')
      });    
  }

  return (
    <div className='container mx-auto mt-20 w-full max-w-2xl'>
      <div className="border-2 rounded-md border-[#24AB70] py-6">
        <div style={{ transform: "translate(30px, 0px)" }}>
          <Link className="flex items-center justify-start cursor-pointer text-xs mb-4" href="/booking">
            <Icon icon="fluent:ios-arrow-24-filled" />
            Retornar para reservas
          </Link>
          <h1 className="flex justify-center items-center text-xl my-6 font-bold uppercase">Cadastrar uma reserva</h1>
        </div>
        <form className='w-full max-w-lg m-auto'>
          <p className="mb-4">Escolha um quarto:</p>
          <div className="grid grid-cols-2 border-2 rounded-md border-gray-200 py-4">
            {
              rooms.map((room) => (
                <label key={room.id} className="flex justify-center items-center gap-2">
                  <div>
                    <Image src={room.photo} alt={room.name} width={200} height={100} />
                    <p>{ room.name }</p>
                  </div>
                  <input type="radio" name="room_id" value={room.id} onChange={(e) => updateAttributes(e.target.value, 'room_id')}/>                  
                </label>    
              ))
            }           
          </div>
          <div className="mt-5">
            <p className="mb-4">Escolha a data para:</p>
            <div className="flex flex-row items-center justify-start px-8">
              <div className="flex items-center gap-2">
                <Icon icon="clarity:calendar-line" className="text-[#24AB70] text-2xl" />
                <h3 className="text-[#222222] text-1xl">Check-in</h3>
              </div>
              <DatePicker selected={attributes.initial_date} value={attributes.initial_date} dateFormat="dd MMM yyyy" className="text-end cursor-pointer w-40 border-transparent" onChange={(date) => updateAttributes(date, 'initial_date')}/>
            </div>
            <div className="flex flex-row items-center justify-start px-8">
              <div className="flex gap-2 items-center">
                <Icon icon="clarity:calendar-line" className="text-[#24AB70] text-2xl" />
                <h3 className="text-[#222222] text-1xl">Check-out</h3>
              </div>
              <DatePicker selected={attributes.final_date} value={attributes.final_date} onChange={(date) => updateAttributes(date, 'final_date')} dateFormat="dd MMM yyyy" className="text-end cursor-pointer w-40 border-transparent" />
            </div>
          </div>
          <div className="flex justify-center mt-10 py-2 bg-[#24AB70] rounded text-white cursor-pointer mb-5" onClick={onSubmit}>
            <button>Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}