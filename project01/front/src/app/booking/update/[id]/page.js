"use client"
import axios from "axios";
import { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import Link from "next/link";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from 'next/navigation';

export default function Update({ params: { id } }) {
  const router = useRouter();
  const [erro, setErro] = useState({});
  const [attributes, setAtributes] = useState({
    id: 0,
    initial_date: "",
    final_date: "",
    room_id: 0,
    created_at: "",
    updated_at: "",
    room: {
      id: 0,
      name: "",
      guests: 0,
      photo: "",
      fan: 0,
      air_conditioning: 0,
      mini_bar: 0,
      price: ""
    }
  });

  async function fetchBooking() {
    await axios.get(`http://127.0.0.1:8000/api/booking/${id}`)
      .then((response) => {
        setAtributes(response.data);
      }).catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    fetchBooking();
  }, [])

  const updateAttributes = (value, field) => {
    setAtributes(attributes => ({ ...attributes, [field]: value }));
  };

  async function onSubmit(event) {
    event.preventDefault()
    await axios.patch(`http://127.0.0.1:8000/api/booking/${id}`, {
      initial_date: attributes.initial_date,
      final_date: attributes.final_date
    })
    .then(() => {
      router.push('/booking');
    })
    .catch((error) => {
      setErro(error.response.data)
    });
  }

  if (attributes.room.photo) return (
      <div className='container mx-auto mt-20 w-full max-w-2xl'>
      <div className="border-2 rounded-md border-[#24AB70] py-6">
        <div style={{ transform: "translate(30px, 0px)" }}>
          <Link className="flex items-center justify-start cursor-pointer text-xs mb-4" href="/booking">
            <Icon icon="fluent:ios-arrow-24-filled" />
            Retornar para reservas
          </Link>
          <h1 className="flex justify-center items-center text-xl my-6 font-bold uppercase">Atualizar uma reserva</h1>
        </div>
        <form className='w-full max-w-lg m-auto'>
          <Image src={attributes.room.photo} alt={attributes.room.name} width={500} height={400} priority/>
          <div className="mt-5">
            <p className="mb-4">Altere a data de hospedagem:</p>
            <div className="flex flex-row items-center justify-start px-8">
              <div className="flex items-center gap-2">
                <Icon icon="clarity:calendar-line" className="text-[#24AB70] text-2xl" />
                <h3 className="text-[#222222] text-1xl">Check-in</h3>
              </div>
              <DatePicker selected={new Date(attributes.initial_date)} value={new Date((attributes.initial_date))} dateFormat="dd MMM yyyy" className="text-end cursor-pointer w-40 border-transparent" onChange={(date) => updateAttributes(date, 'initial_date')} />
              {erro?.initial_date && (<div className="text-red-500 text-xs">{erro.initial_date}</div>)}
            </div>
            <div className="flex flex-row items-center justify-start px-8">
              <div className="flex gap-2 items-center">
                <Icon icon="clarity:calendar-line" className="text-[#24AB70] text-2xl" />
                <h3 className="text-[#222222] text-1xl">Check-out</h3>
              </div>
              <DatePicker selected={new Date(attributes.final_date)} value={new Date((attributes.final_date))} dateFormat="dd MMM yyyy" className="text-end cursor-pointer w-40 border-transparent" onChange={(date) => updateAttributes(date, 'final_date')} />
              {erro?.final_date && (<div className="text-red-500 text-xs">{erro.final_date}</div>)}
            </div>
          </div>
          <div className="flex justify-center mt-10 py-2 bg-[#24AB70] rounded text-white cursor-pointer mb-5" onClick={onSubmit}>
            <button>Atualizar</button>
          </div>
        </form>
      </div>
    </div>
  )
  return null
}