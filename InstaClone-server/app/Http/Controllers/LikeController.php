<?php

namespace App\Http\Controllers;

use App\Models\Like;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function likePost(Request $request){
        $like  = new Like;
        $like->user_id = $request->user_id;
        $like->post = $request->post;

        $like->save();
        return response()->json([
            "Status" => "Success",
            "Message" => $like,
            ]
        );
    }
}
