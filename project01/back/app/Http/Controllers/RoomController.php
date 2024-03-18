<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Room;

class RoomController extends Controller
{
  public function index()
  {
      return Room::orderBy('price', 'ASC')->get();
  }

  public function store(Request $request)
  {
    $validatedData = $request->validate([
        'name' => 'required',
        'guests' => 'numeric|min:1',
        'photo' => 'required',
        'price' => 'required',
    ]);
    $room = new Room;
    $room->name = $request->input('name');
    $room->guests = $request->input('guests');
    $room->photo = $request->input('photo');
    $room->fan = $request->input('fan');
    $room->air_conditioning = $request->input('air_conditioning');
    $room->mini_bar = $request->input('mini_bar');
    $room->price = $request->input('price');
    $room->save();

    return response($room, 200);
  }

  public function show(int $id)
  {
      $room = Room::find($id);
      $room->fan = $room->fan == 1;
      $room->air_conditioning = $room->air_conditioning == 1;
      $room->mini_bar = $room->mini_bar == 1;

      return response($room, 200);
  }

  public function update(Request $request, int $id)
  {
    $validatedData = $request->validate([
      'name' => 'required',
      'guests' => 'numeric|min:1',
      'photo' => 'required',
      'price' => 'required',
    ]);

      $room = Room::findOrFail($id);
      $room->name = $request->input('name');
      $room->guests = $request->input('guests');
      $room->photo = $request->input('photo');
      $room->fan = $request->input('fan');
      $room->air_conditioning = $request->input('air_conditioning');
      $room->mini_bar = $request->input('mini_bar');
      $room->price = $request->input('price');
      $room->save();

      return response($room, 200);
  }

  public function destroy(int $id)
  {
      Room::destroy($id);
      return response('Quarto deletado', 200);
  }
}
