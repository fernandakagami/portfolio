export default function Create() {
  return (
    <div className='container mx-auto mt-20 w-full max-w-xl'>
      <div className="border-2 rounded-md border-[#24AB70] py-6">
        <h1 className="flex justify-center text-xl mb-6 font-bold uppercase">Cadastrar um quarto</h1>
        <form className='w-full max-w-lg m-auto'>
          <div className='-mx-3 mb-6 flex flex-wrap'>
            <div className='w-full px-3'>
              <label
                className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
                htmlFor='grid-name'
              >
                Name
              </label>
              <input
                className='mb-3 block w-full appearance-none rounded border border-gray-50 bg-gray-50 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
                id='grid-name'
                type='text'
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
                  />
                  <span
                    className="checkmark absolute right-0 top-1 h-4 w-4 rounded border border-zinc-400"
                  ></span>
                </label>
              </div>
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