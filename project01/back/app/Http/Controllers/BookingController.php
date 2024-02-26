<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;
use App\Models\Room;
use Carbon\Carbon;
use DateTime;

class BookingController extends Controller
{
    public function index()
    {          
        $bookings = Booking::whereNotNull('room_id')->with('room')->get();
        foreach ($bookings as $booking) {
            $booking->initial_date = Carbon::parse($booking->initial_date)->format('d/m/Y');
            $booking->final_date = Carbon::parse($booking->final_date)->format('d/m/Y');
        }    
        return $bookings;
    }

    public function store(Request $request)
    {        
        $booking = new Booking;        
        $booking->initial_date = Carbon::parse($request->input('initial_date'))->format('Y/m/d');        
        $booking->final_date = Carbon::parse($request->input('final_date'))->format('Y/m/d');        
        $booking->room_id = $request->input("room_id");
        $booking->save();

        return response($booking, 200);
    }

    public function show(int $id)
    {        
        $booking = Booking::with('room')->find($id);  
        $booking->initial_date = Carbon::parse($booking->initial_date)->format('m/d/Y');  
        $booking->final_date = Carbon::parse($booking->final_date)->format('m/d/Y');          
        return response($booking, 200);
    }

  public function update(Request $request, int $id)
  {
      $booking = Booking::findOrFail($id);

      $booking->initial_date = Carbon::parse($request->input('initial_date'))->format('Y/m/d');        
      $booking->final_date = Carbon::parse($request->input('final_date'))->format('Y/m/d');        
      $booking->save();

      return response($booking, 200);
  }

  public function destroy(int $id)
  {
      Booking::destroy($id);
      return response('Reserva deletada', 200);
  }
}
