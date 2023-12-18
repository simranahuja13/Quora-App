// PostContext.js
import { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [postData, setPostData] = useState([]);
  const [comments, setComments] = useState({}); 

  const updatePostData = (newData) => {
    const postWithId = { ...newData, id: uuidv4() };
    setPostData((prevData) => [postWithId,...prevData]);
     setComments((prevComments) => ({ ...prevComments, [newData.id]: [] }));
     console.log(postWithId)
  };

  const addComment = (postId, comment) => {
    setComments((prevComments) => {
      const commentsArray = Array.isArray(prevComments[postId])
        ? prevComments[postId]
        : [];
        
      return {
        ...prevComments,
        [postId]: [...commentsArray, comment],
      };
    });

  };

  return (
    <PostContext.Provider value={{ postData, updatePostData, comments, addComment  }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  return useContext(PostContext);
};
