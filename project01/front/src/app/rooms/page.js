import Link from "next/link"

export default function rooms() {
  return (
    <>
      <div className='container mx-auto mt-8'>
        <Link href="/rooms/create">Cadastrar um quarto</Link>
      </div>
    </>

  )
}