"use client"
import axios from "axios";
import { useState } from "react";
import { Icon } from '@iconify/react';

export default function Create() {
  const [attributes, setAtributes] = useState({
    name: '',
    guests: 0,
    photo: "",
    fan: false,
    air_conditioning: false,
    mini_bar: false,
    price: ""
  });

  const updateAttributes = (value, field) => {
    setAtributes({ ...attributes, [field]: value });
  };

  async function onSubmit(event) {
    event.preventDefault()
    await axios.post("http://127.0.0.1:8000/api/room/", attributes);
  }

  return (
    <div className='container mx-auto mt-20 w-full max-w-xl'>
      <div className="border-2 rounded-md border-[#24AB70] py-6">
        <div>
          <Icon icon="material-symbols:close" />
          <h1 className="flex justify-center text-xl mb-6 font-bold uppercase">Cadastrar um quarto</h1>
        </div>
        <form className='w-full max-w-lg m-auto' onSubmit={onSubmit}>
          <div className='-mx-3 mb-6 flex flex-wrap'>
            <div className='w-full px-3'>
              <label
                className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
                htmlFor='grid-name'
              >
                Nome
              </label>
              <input
                className='mb-3 block w-full appearance-none rounded border border-gray-50 bg-gray-50 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
                id='grid-name'
                type='text'
                onChange={(e) => updateAttributes(e.target.value, 'name')}
                value={attributes.name}
              />
            </div>
          </div>
          <div className='-mx-3 mb-6 flex flex-wrap'>
            <div className='w-full px-3'>
              <label
                className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
                htmlFor='grid-name'
              >
                Quantidade de pessoas
              </label>
              <input
                className='mb-3 block w-full appearance-none rounded border border-gray-50 bg-gray-50 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
                id='grid-name'
                type='number'
                onChange={(e) => updateAttributes(e.target.value, 'guests')}
                value={attributes.guests}
              />
            </div>
          </div>
          <div className='-mx-3 mb-6 flex flex-wrap'>
            <div className='w-full px-3'>
              <label
                className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
                htmlFor='grid-name'
              >
                Foto
              </label>
              <input
                className='mb-3 block w-full appearance-none rounded border border-gray-50 bg-gray-50 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
                id='grid-name'
                type='text'
                onChange={(e) => updateAttributes(e.target.value, 'photo')}
                value={attributes.photo}
              />
            </div>
          </div>
          <div className='-mx-3 mb-6 flex flex-col flex-wrap px-3'>
            <label
              className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
              htmlFor='grid-first-name'
            >
              Amenidades
            </label>
            <div className="flex flex-row justify-start items-center gap-4">
              <div className="flex flex-row justify-start items-center gap-1 checkbox relative cursor-pointer select-none">
                <label className="checkbox relative block cursor-pointer select-none pr-5">
                  Ventilador
                  <input
                    className="absolute right-0 top-0 cursor-pointer opacity-0"
                    type="checkbox"
                    onChange={(e) => updateAttributes(e.target.checked, 'fan')}
                    value={attributes.fan}
                  />
                  <span
                    className="checkmark absolute right-0 top-1 h-4 w-4 rounded border border-zinc-400"
                  ></span>
                </label>
              </div>
              <div className="flex flex-row justify-start items-center gap-1 checkbox relative cursor-pointer select-none">
                <label className="checkbox relative block cursor-pointer select-none pr-5">
                  Ar condicionado
                  <input
                    className="absolute right-0 top-0 cursor-pointer opacity-0"
                    type="checkbox"
                    onChange={(e) => updateAttributes(e.target.checked, 'air_conditioning')}
                    value={attributes.air_conditioning}
                  />
                  <span
                    className="checkmark absolute right-0 top-1 h-4 w-4 rounded border border-zinc-400"
                  ></span>
                </label>
              </div>
              <div className="flex flex-row justify-start items-center gap-1 checkbox relative cursor-pointer select-none">
                <label className="checkbox relative block cursor-pointer select-none pr-5">
                  Frigobar
                  <input
                    className="absolute right-0 top-0 cursor-pointer opacity-0"
                    type="checkbox"
                    onChange={(e) => updateAttributes(e.target.checked, 'mini_bar')}
                    value={attributes.mini_bar}
                  />
                  <span
                    className="checkmark absolute right-0 top-1 h-4 w-4 rounded border border-zinc-400"
                  ></span>
                </label>
              </div>
            </div>
          </div>
          <div className='-mx-3 mb-6 flex flex-wrap'>
            <div className='w-full px-3'>
              <label
                className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
                htmlFor='grid-name'
              >
                Preço
              </label>
              <input
                className='mb-3 block w-full appearance-none rounded border border-gray-50 bg-gray-50 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
                id='grid-name'
                type='text'
                onChange={(e) => updateAttributes(e.target.value, 'price')}
                value={attributes.price}
              />
            </div>
          </div>
          <div className="flex justify-center mt-10 py-2 bg-[#24AB70] rounded text-white cursor-pointer">
            <button>Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}