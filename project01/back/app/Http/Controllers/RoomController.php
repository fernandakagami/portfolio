<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Room;

class RoomController extends Controller
{
  public function index()
  {                
      return Room::all();
  }

  public function store(Request $request)
  {        
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
      
      return response($room, 200);
  }

  public function update(Request $request, int $id)
  {
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
