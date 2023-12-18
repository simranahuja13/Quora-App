


import React, { useState } from 'react';
import DetailedView from './DetailedView';
import { Avatar } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import GetAppIcon from '@mui/icons-material/GetApp';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ShareIcon from '@mui/icons-material/Share';
import './css/BodyPost.css';
import { usePostContext } from './PostContext';

function PostContainer() {
  const { postData, comments, addComment } = usePostContext();

  const [commentStates, setCommentStates] = useState({});
  const [inputComments, setInputComments] = useState({});
  const [detailedViewData, setDetailedViewData] = useState(null);
  const [votes, setVotes] = useState({}); 

  const handleInputCommentChange = (postId, e) => {
    const { value } = e.target;
    setInputComments((prevStates) => ({
      ...prevStates,
      [postId]: value,
    }));
  };
  console.log(postData);

  const toggleComment = (postId) => {
    setCommentStates((prevStates) => ({
      ...prevStates,
      [postId]: !prevStates[postId],
    }));
  };

  const handleCommentButton = (postId) => {
    addComment(postId, inputComments[postId] || '');
    setInputComments((prevStates) => ({
      ...prevStates,
      [postId]: '',
    }));
  };


  const handleVote = (postId, type) => {
    setVotes((prevVotes) => {
      const existingVote = prevVotes[postId] || { upvotes: 0, downvotes: 0 };

      let updatedVotes = { ...prevVotes };

      if (type === 'upvote' && existingVote.upvotes === 1) {
        updatedVotes[postId] = { upvotes: 0, downvotes: 0 };
      } else if (type === 'downvote' && existingVote.downvotes === 1) {
        updatedVotes[postId] = { upvotes: 0, downvotes: 0 };
      } else {
        updatedVotes[postId] = {
          upvotes: type === 'upvote' ? 1 : 0,
          downvotes: type === 'downvote' ? 1 : 0,
        };
      }

      return updatedVotes;
    });
  };
  const handleReadMore = (postId) => {
    setDetailedViewData({
      postId,
      text: postData.find((post) => post.id === postId)?.paragraph,
    });
  };
  
  
  const shouldDisplayReadMore = (text) => {
    const words = text.split(/\s+/).filter((word) => word.trim() !== ''); // Split text into words and remove empty strings
    return words.length > 10;
  };

  return (
    <div>
      <ul>
        {postData.map((post, index) => (
          <div className="postContainer" key={index}>
            <li>
              <div className="postContainer">
                <div className="pHeader1">
                  <div className="pHeader2">
                    <Avatar>
                      <img src="/images/minakshi.jpeg" alt="" />
                    </Avatar>
                    <div className="ppn">
                      <div className="hName">
                        <div>
                          <b>Minkesh Devani</b>
                        </div>
                        <div className="follow">
                          <span>*</span>Follow
                        </div>
                      </div>
                      <div>
                        A self-proclaimed mature <span>*</span>
                        <span>5y</span>
                      </div>
                    </div>
                  </div>
                  <div className="clearicon">
                    <ClearIcon />
                  </div>
                </div>

                <div>
                  <h4>{post.question} </h4>
                  {/* <p>{post.paragraph} </p> */}
                  {detailedViewData?.postId === post.id ? (
            <p>{post.paragraph}</p>
          ) : (
            <p>{post.paragraph.split('\n').slice(0, 3).join('\n')}</p>
          )}
          {shouldDisplayReadMore(post.paragraph) && (
            <button onClick={() => handleReadMore(post.id)}>Read More</button>
          )}
               
                  {post.img && 
                  <img className="post_images" src={post.img} alt="" />}
                </div>

                <div className="pfooter1">
                  <div className="pfooter2">
                    <div className="pReaction">
                      <div className="voteupvote">
                        <div className="vote">
                          <button onClick={() => handleVote(post.id,'upvote')}>
                            <div>
                              <FileUploadIcon />
                            </div>
                            <div>Upvote</div>
                            <div>{votes[post.id]?.upvotes || 0}</div>
                          </button>
                        </div>

                        <div className="downvote tooltip">
                          <button onClick={() => handleVote(post.id,'downvote')}>
                            <GetAppIcon />
                            {votes[post.id]?.downvotes || 0}
                          </button>
                          <span className="tooltiptext">downvote</span>
                        </div>
                      </div>
                      <div className="pFc">
                        <div className="tooltip" onClick={() => toggleComment(post.id)}>
                          <ModeCommentIcon />
                          <span className="tooltiptext">Answer</span>
                        </div>
                        <div>{post.commentCount}</div>
                      </div>
                      <div className="pFc">
                        <div className="tooltip">
                          <ShareIcon />
                          <span className="tooltiptext">share</span>
                        </div>
                        <div>22</div>
                      </div>
                    </div>
                  </div>
                  <div className="horisign">
                    <MoreHorizIcon />
                  </div>
                </div>
                {commentStates[post.id] && (
                  <div className="pComment">
                    <ul className="commentList">
                      {comments[post.id] &&
                        comments[post.id].map((text, commentIndex) => (
                          <li key={commentIndex}>
                            <div className="commentedFieldBox">
                              <div>
                                <Avatar>
                                  <img src="/images/profile2.webp" alt="" />
                                </Avatar>
                              </div>
                              <div>
                                <span className="commentedBox"> {text}</span>
                              </div>
                            </div>
                       
                          </li>
                        ))}
                    </ul>
                    <div className="AnswerFooter">
                      <div className="AnswerFooterAvtar">
                        <Avatar>
                          <img src="/images/profile2.webp" alt="" />
                        </Avatar>
                      </div>
                      <div className="AnswerFooterInput">
                        <input
                          type="text"
                          value={inputComments[post.id] || ''}
                          onChange={(e) => handleInputCommentChange(post.id, e)}
                        />
                      </div>
                      <div className="AnswerFooterButton">
                        <button onClick={() => handleCommentButton(post.id)} type="submit">
                          Answer
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </li>
          </div>
        ))}
      </ul>
     
    </div>
  );
}

export default PostContainer;


