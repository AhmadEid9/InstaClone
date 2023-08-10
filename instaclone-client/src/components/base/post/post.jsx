import React from 'react';
import './style.css'; 

const Post = ({ title, description, imageUrl }) => {
  return (
    <div className="post">
      {imageUrl && <img src={imageUrl} alt={title} className="post-image" />}
      <div className="post-content">
        <h3 className="post-title">{title}</h3>
        <p className="post-description">{description}</p>
      </div>
    </div>
  );
};

export default Post;
