"use client"
import axios from "axios";
import { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import Link from "next/link";
import ModalComponent from "../../../components/modal";
import { useRouter } from 'next/navigation';

export default function Update({ params: { id } }) {
  const router = useRouter();
  const [erro, setErro] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [attributes, setAtributes] = useState({
    name: "",
    guests: 0,
    photo: "",
    fan: false,
    air_conditioning: false,
    mini_bar: false,
    price: ""
  });

  async function fetchRoom() {
    await axios.get(`http://127.0.0.1:8000/api/room/${id}`)
      .then((response) => {
        setAtributes(response.data)
      }).catch((error) => {
        console.log(error)
      })
  }

  async function deleteRoom() {
    await axios.delete(`http://127.0.0.1:8000/api/room/${id}`)
      .then((response) => {
        setOpenModal(false);
        router.push('/rooms')
      }).catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    fetchRoom()
  }, [])

  const updateAttributes = (value, field) => {
    setAtributes(attributes => ({ ...attributes, [field]: value }));
  };

  async function onSubmit(event) {
    event.preventDefault()
    await axios.patch(`http://127.0.0.1:8000/api/room/${id}`, attributes)
    .then(() => {
      router.push('/rooms');
    }).catch((error) => {
      setErro(error.response.data.errors)
      console.log(error);
    });
  }

  if (!attributes) return null
  return (
    <div className='container mx-auto mt-20 w-full max-w-xl'>
      <div className="border-2 rounded-md border-[#24AB70] py-6">
        <div style={{ transform: "translate(30px, 0px)" }}>
          <Link className="flex items-center justify-start cursor-pointer text-xs mb-4" href="/rooms">
            <Icon icon="fluent:ios-arrow-24-filled" />
            Retornar para quartos
          </Link>
          <h1 className="flex justify-center text-xl mb-6 font-bold uppercase">Atualizar quarto</h1>
        </div>
        <form className='w-full max-w-lg m-auto'>
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
              {erro?.name && (<div className="text-red-500 text-xs">{erro.name}</div>)}
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
              {erro?.guests && (<div className="text-red-500 text-xs">O campo hóspedes é obrigatório.</div>)}
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
              {erro?.photo && (<div className="text-red-500 text-xs">{erro.photo}</div>)}
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
                    checked={attributes.fan}
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
                    checked={attributes.air_conditioning}
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
                    checked={attributes.mini_bar}
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
              {erro?.price && (<div className="text-red-500 text-xs">{erro.price}</div>)}
            </div>
          </div>
          <div className="flex justify-center mt-10 py-2 bg-[#24AB70] rounded text-white cursor-pointer" onClick={onSubmit}>
            <button>Atualizar</button>
          </div>
          <div onClick={() => setOpenModal(true)} className="flex justify-center mt-2 py-2 bg-red-500 rounded text-white cursor-pointer">
            <button>Deletar</button>
          </div>
        </form>
        <ModalComponent triggerModal={setOpenModal} show={openModal} triggerFunction={deleteRoom} />
      </div>
    </div>
  )
}