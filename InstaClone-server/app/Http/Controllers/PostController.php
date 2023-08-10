<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function createPost(Request $request){
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'user_id' => 'required',
            'image' => 'required|string'
        ]);

        $post = new Post;
        $post->title = $request->title;
        $post->description = $request->description;
        $post->user_id = $request->user_id;
        $post->image = $request->image;

        $post->save();

        $token = Auth::login($post);

        $post->token = $token;

        return response()->json([
            'status' => 'success',
            'message' => 'Post created successfully',
            'post' => $post,
        ], 201);
    }

    function getPosts($id = null){
        if($id)
            $post = Post::find($id);
        else
            $post = Post::all();

        return response()->json([
            "status" => "success", 
            "data" => $post
        ]);
    }
}
