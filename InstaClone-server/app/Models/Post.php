<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    public function Bookings(){
        return $this->hasMany(Like::class, "user_id"); //this is the foreign key in the bookings table
    } 
}
