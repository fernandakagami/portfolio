'use client'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Icon } from '@iconify/react';

export default function Bar() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  let [count, setCount] = useState(0);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }

  return (
    <div className="absolute bg-white bottom-44 rounded-full flex items-center justify-center" style={{ width: "1000px", height: "100px", bottom: "170px" }}>
      <form className="flex flex-row" >
        <div className="flex flex-col items-end border-e pe-8">
          <div className="flex gap-2 items-center">
            <Icon icon="clarity:calendar-line" className="text-[#24AB70] text-2xl" />
            <h3 className="text-[#222222] text-2xl">Check-in</h3>
          </div>
          <DatePicker selected={date} onChange={date => setDate(date)} style={{ color: "black" }} dateFormat="dd MMM yyyy" className="text-end" />
        </div>
        <div className="flex flex-col items-end border-e pe-8">
          <div className="flex gap-2 items-center">
            <Icon icon="clarity:calendar-line" className="text-[#24AB70] text-2xl" />
            <h3 className="text-[#222222] text-2xl">Check-out</h3>
          </div>
          <DatePicker selected={date} onChange={date => setDate(date)} style={{ color: "black" }} dateFormat="dd MMM yyyy" className="text-end" />
        </div>
        <div className="relative flex flex-col items-end ps-8" onClick={() => setOpen(!open)}>
          <div className="flex gap-2 items-center">
            <Icon icon="ri:user-fill" className="text-[#24AB70] text-2xl" />
            <h3 className="text-[#222222] text-2xl">Quartos para</h3>
          </div>
          <div>1 quarto, 2 pessoas</div>
        </div>
      </form >

      {
        open && <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" tabIndex="-1">
          <div className="py-1">
            <div>
              <button onClick={incrementCount}>+</button><div>{count}</div><button onClick={decrementCount}>-</button>
            </div>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" tabIndex="-1">Support</a>
          </div>
        </div>
      }
    </div >
  )
}