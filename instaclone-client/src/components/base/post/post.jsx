import React from 'react';
import './style.css'; 

const Post = ({ name = "Name of User",  title, description, imageUrl, likes = 0 }) => {
  return (
    <div className="post">
      <label>
        {name}  
      </label>  
      {imageUrl && <img src={imageUrl} alt={title} className="post-image" />}
      <div className="post-content">
        <div className='row'>

          <h3 className="post-title">{title}</h3>
          <div className="row">
          <label>&#9829;</label>
          <label>{likes} likes</label>
          </div>
        </div>
        <p className="post-description">{description}</p>
      </div>
    </div>
  );
};

export default Post;
