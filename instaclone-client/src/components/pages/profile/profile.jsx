import React, { useEffect, useState } from 'react';
import './style.css'; 
import Post from '../../base/post/post';
import axios from 'axios';
const Profile = ({ id, username = 'name', avatarUrl = '', followers = 0, following = 0 }) => {
    const [posts, setPosts] = useState([]);
    async function fetchUserPosts() {
        const response = await axios.get(`https://http://127.0.0.1:8000/api/post?userId=${id}`).catch( (e) => { console.log(e)});
        setPosts(response.data);
    }
    useEffect( () => {
        fetchUserPosts()
    }, [username])  
  return (
    <div className="user-profile">
      <div className="user-header">
        <img src={avatarUrl} alt={`${username}'s Avatar`} className="avatar" />
        <h2 className="username">{username}</h2>
        <div className="user-stats">
          <span className="stat">{posts} posts</span>
          <span className="stat">{followers} followers</span>
          <span className="stat">{following} following</span>
        </div>
      </div>
      <div className="user-posts">
        {posts.map((post, index) => (
            <>
            <Post name={username} title={post.title} description={post.description} imageUrl={post.image} likes={post.likes}/>
            </>
        ))}
      </div>
    </div>
  );
};

export default Profile;