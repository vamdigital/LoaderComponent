import React from "react";
import './post.scss';

const Post = props => {
  const {postAvatarURL, postName, postBio} = props;
  return (
    <div className="post-row">
      <div className="post-avatar">
        <img src={postAvatarURL} alt={postName}/>
      </div>
      <div className="post-description">
        <div className="post-name">{postName}</div>
        <div className="post-bio">{postBio}</div>
      </div>
    </div>
  );
};

export default Post;
