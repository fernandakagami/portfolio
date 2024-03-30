'use client';
import { useSearch } from '../../contexts/SearchContext';

export default function Table() {
  const { setSerch, search } = useSearch();

  if(!search.length) return null;

  return (
    <div className="mt-[-150px]">
      <table className="table-auto">
        <thead>
          <tr>
            <th>Início da estadia</th>
            <th>Fim da estadia</th>
            <th>Hóspedes</th>
            <th>Reserva</th>
          </tr>
        </thead>
        <tbody>
          { search.map((booking) => (
            <tr key={booking.id}>
            <td>{booking.initial_date}</td>
            <td>{booking.final_date}</td>
            <td>{booking.guests}</td>
            <td>{booking.id}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}