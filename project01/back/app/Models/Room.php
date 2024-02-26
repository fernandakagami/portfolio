<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'guests', 'fan', 'air_conditioning', 'mini_bar', 'photo', 'price'
    ];   
    
    public function booking()
    {
        return $this->hasMany(Booking::class, 'room_id');
    }

    // protected static function booted()
    // {
    //     self::addGlobalScope('ordered', function(Builder $queryBuilder) {
    //         $queryBuilder->orderBy('nome', 'asc');
    //     });
    // }
}
