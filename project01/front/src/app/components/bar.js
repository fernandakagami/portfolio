'use client'

import { useSearch } from '../../contexts/SearchContext';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Icon } from '@iconify/react';

export default function Bar() {
  const [open, setOpen] = useState(false);
  const { setSerch, search } = useSearch();
  const [bookings, setBookings] = useState({});
  let [guest, setGuest] = useState(1);
  const [attributes, setAtributes] = useState({
    initial_date: new Date(),
    final_date: new Date(),
    guests: 1,
  });

  async function fetchBookings(e) {
    e.preventDefault();
    await axios.post("http://127.0.0.1:8000/api/bookings", attributes)
      .then((response) => {
        setSerch(response.data);
      }).catch((error) => {
        console.log(error)
      })
  }

  const [reservation, setReservation] = useState({ guest: 1 })

  const updateAttributes = (value, field) => {
    setAtributes(attributes => ({ ...attributes, [field]: value }));
  };

  const handleSetReservation = () => {
    setReservation({ guest })
    updateAttributes(guest, 'guests')
    setOpen(false)
  }

  return (
    <div className="bg-white bottom-44 rounded-full flex items-center justify-center" style={{ width: "900px", height: "100px", transform: "translateY(-265px)" }}>
      <form className="flex flex-row" >
        <div className="flex flex-col items-end justify-center border-e px-8">
          <div className="flex gap-2 items-center">
            <Icon icon="clarity:calendar-line" className="text-[#24AB70] text-2xl" />
            <h3 className="text-[#222222] text-2xl">Check-in</h3>
          </div>
          <DatePicker selected={attributes.initial_date} value={attributes.initial_date} onChange={date => updateAttributes(date, 'initial_date')} dateFormat="dd MMM yyyy" className="text-end cursor-pointer w-40 border-transparent" />
        </div>
        <div className="flex flex-col items-end justify-center border-e px-8">
          <div className="flex gap-2 items-center">
            <Icon icon="clarity:calendar-line" className="text-[#24AB70] text-2xl" />
            <h3 className="text-[#222222] text-2xl">Check-out</h3>
          </div>
          <DatePicker selected={attributes.final_date} value={attributes.final_date} onChange={date => updateAttributes(date, 'final_date')} dateFormat="dd MMM yyyy" className="text-end cursor-pointer w-40 border-transparent" />
        </div>
        <div className="relative flex flex-col items-end justify-center ps-8 pe-36 cursor-pointer" onClick={() => setOpen(!open)}>
          <div className="flex gap-2 items-center">
            <Icon icon="ri:user-fill" className="text-[#24AB70] text-2xl" />
            <h3 className="text-[#222222] text-2xl">Quartos para</h3>
          </div>
          <div>{reservation?.guest} pessoas</div>
        </div>
        <div className="cursor-pointer relative">
          <button className="absolute bg-[#24AB70] text-[#fff] rounded-full top-[-13px] right-[-60px] text-2xl" style={{ width: "165px", height: "100px" }} onClick={(e)=>fetchBookings(e)}>
            Buscar
          </button>
        </div>
      </form >

      {
        open && <div className="absolute right-[160px] top-[103px] z-10 p-3 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" tabIndex="-1">
          <div className="py-1 relative">
            <div className="absolute top-[-5.25px] right-[-6.25px] cursor-pointer" onClick={() => setOpen(false)}>
              <Icon icon="material-symbols:close" />
            </div>
            <p className="mb-2 flex justify-center">Consulta</p>
            <hr></hr>
            <div className="mt-3">
              <div className="flex flex-row justify-between">
                <p>Pessoas</p>
                <div className="flex flex-row">
                  <button onClick={() => setGuest((guest) => guest + 1)}>+</button>
                  <div className="w-10">
                    <p className="text-center">
                      {guest}
                    </p>
                  </div>
                  <button onClick={() => setGuest((guest) => Math.max(guest - 1, 1))}>-</button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-3 cursor-pointer bg-[#24AB70] rounded-lg py-1" onClick={() => handleSetReservation()}>
              <button className="text-[#fff]">Incluir</button>
            </div>
          </div>
        </div>
      }
    </div >
  )
}