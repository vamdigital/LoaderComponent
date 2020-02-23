import React, { useState, useEffect } from "react";
import Loader from "../Loader";
import Post from "../Post";

const PostList = () => {
  const [uiState, setUiState] = useState({
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: []
  });
  const apiUrl =
    "https://5e516149f2c0d300147c06bc.mockapi.io/api/postLoader/user";

  const fetchUsers = apiUrl => {
    return fetch(apiUrl)
      .then(response => {
        setUiState(state => ({
          ...state,
          isLoading: true
        }));
        if (!response.ok) {
          setUiState(state => ({
            ...state,
            isLoading: false,
            isError: true
          }));
          throw new Error("Error fetching data");
        }
        return response.json();
      })
      .then(json => {
        setTimeout(() => {
          setUiState(state => ({
            ...state,
            isLoading: false,
            isSuccess: true,
            isError: false,
            data: json
          }));
        }, 2000);
      })
      .catch(err => {
        setUiState(state => ({
          ...state,
          isLoading: false,
          isSuccess: false,
          isError: true,
          data: err
        }));
      });
  };

  useEffect(() => {
    fetchUsers(apiUrl);
  }, []);

  console.log(uiState);
  return (
    <div className="post-list">
      <h1>Post List</h1>
      {uiState.isLoading && (
        <>
          <Loader rows={5} />
        </>
      )}

      {uiState.isError && <div>Error</div>}

      {uiState.isSuccess &&
        uiState.data.map(user => (
          <Post
            postAvatarURL={user.avatar}
            postName={user.name}
            postBio={user.bio}
            key={user.id}
          />
        ))}
    </div>
  );
};

export default PostList;
