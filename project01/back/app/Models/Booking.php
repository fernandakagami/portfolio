<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    public $table = 'booking';
    protected $fillable = ['initial_date', 'final_date'];

    public function room()
    {
        return $this->belongsTo(Room::class, 'room_id');
    }
}
