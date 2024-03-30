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
    $validatedData = $request->validate([
        'initial_date' => ['required'],
        'final_date' => ['required'],
        'guests' => ['required'],
        'room_id' => ['required'],
    ]);

    if ($request->input('guests') > Room::find($request->input('room_id'))->guests) {
      return response()->json(array('status' => 422, 'guests' => 'Quantidade de hóspedes é inválida.'), 422);}

    if ($request->input('initial_date') < Carbon::now()) {
    return response()->json(array('status' => 422,'initial_date' => 'Data de check-in é inválida.'), 422);}

    if ($request->input('final_date') < $request->input('initial_date') || $request->input('final_date') < Carbon::now()) {
    return response()->json(array('status' => 422, 'final_date' => 'Data de check-out é inválida.'), 422);}

    $booking = new Booking;
    $booking->initial_date = Carbon::parse($request->input('initial_date'))->format('Y/m/d');
    $booking->final_date = Carbon::parse($request->input('final_date'))->format('Y/m/d');
    $booking->guests = $request->input("guests");
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

  public function findBooking(Request $request)
  {
    $booking = Booking::where('initial_date', '>=', Carbon::parse($request->input('initial_date'))->format('Y/m/d'))
      ->where('final_date', '<=', Carbon::parse($request->input('final_date'))->format('Y/m/d'))
      ->with('room')
      ->where('guests', '=', $request->input('guests'))
      ->get();
    return response($booking, 200);
  }

  public function update(Request $request, int $id)
  {
    if ($request->input('initial_date') < Carbon::now()) {
    return response()->json(array('status' => 422,'initial_date' => 'Data de check-in é inválida.'), 422);}

    if ($request->input('final_date') < $request->input('initial_date') || $request->input('final_date') < Carbon::now()) {
    return response()->json(array('status' => 422, 'final_date' => 'Data de check-out é inválida.'), 422);}

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
