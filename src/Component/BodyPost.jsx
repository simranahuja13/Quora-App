import { Avatar } from "@mui/material";
import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import GetAppIcon from "@mui/icons-material/GetApp";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ShareIcon from "@mui/icons-material/Share";
import "./css/BodyPost.css";
import PostContainer from "./PostContainer";
// import { usePostContext } from './PostContext';

export default function BodyPost() {
  const [comment1, setComment1] = useState(false);

  const Opencomment1 = () => {
    setComment1(!comment1);
  };
  const [comment2, setComment2] = useState(false);

  const Opencomment2 = () => {
    setComment2(!comment2);
  };

  const [vote1, setVote1] = useState(0);
  const [unvote1, setUnvote1] = useState(0);

  const [activevote1, setActivevote1] = useState(false);
  const [unactivevote1, setUnactivevote1] = useState(false);

  function voteg() {
    if (activevote1) {
      setActivevote1(false);
      setVote1(vote1 - 1);
    } else {
      setActivevote1(true);
      setVote1(vote1 + 1);
      if (unactivevote1) {
        setUnactivevote1(false);
        setVote1(vote1 + 1);
        setUnvote1(unvote1 - 1);
      }
    }
  }

  function unvoteg() {
    if (unactivevote1) {
      setUnactivevote1(false);
      setUnvote1(unvote1 - 1);
    } else {
      setUnactivevote1(true);
      setUnvote1(unvote1 + 1);
      if (activevote1) {
        setActivevote1(false);
        setUnvote1(unvote1 + 1);
        setVote1(vote1 - 1);
      }
    }
  }

  const [vote2, setVote2] = useState(0);
  const [unvote2, setUnvote2] = useState(0);

  const [activevote2, setActivevote2] = useState(false);
  const [unactivevote2, setUnactivevote2] = useState(false);

  function voteh() {
    if (activevote2) {
      setActivevote2(false);
      setVote2(vote2 - 1);
    } else {
      setActivevote2(true);
      setVote2(vote2 + 1);
      if (unactivevote2) {
        setUnactivevote2(false);
        setVote2(vote2 + 1);
        setUnvote2(unvote2 - 1);
      }
    }
  }

  function unvoteh() {
    if (unactivevote2) {
      setUnactivevote2(false);
      setUnvote2(unvote2 - 1);
    } else {
      setUnactivevote2(true);
      setUnvote2(unvote2 + 1);
      if (activevote2) {
        setActivevote2(false);
        setUnvote2(unvote2 + 1);
        setVote2(vote2 - 1);
      }
    }
  }
  return (
    <>
      <div>
        <PostContainer />
      </div>
      <div className="postContainer">
        <div className="pHeader1">
          <div className="pHeader2">
            {/* <div className='svg-icon blur-effect'> <Avatar></Avatar></div> */}
            <Avatar>
              <img src="/images/hritik.jpeg" alt="" />
            </Avatar>
            <div className="ppn">
              <div className="hName">
                <div>
                  <b>Hritik's Universe</b>
                </div>
                <div className="follow">
                  {" "}
                  <span>*</span>Follow
                </div>
              </div>
              <div>
                Answered by Hritik Talreja <span>*</span>
                <span>1y</span>
              </div>
            </div>
          </div>

          <div className="clearicon">
            <ClearIcon />
          </div>
        </div>

        <div>
          <h4>Which screenshot deserve 9888k views?</h4>
        </div>
        <div>
          <img className="post_images" src="/images/post1.jpeg " alt="" />
        </div>
        {/* https://stat4.bollywoodhungama.in/wp-content/uploads/2020/11/Photos-Rakul-Preet-Singh-and-Nitin-Mirani-spotted-at-Bastian-in-Bandra-6.jpg */}
        {/* https://stat5.bollywoodhungama.in/wp-content/uploads/2023/04/Rakul-Preet-Singhs-cutaway-red-gown-serves-as-another-evidence-of-her-ultra-chic-fashion-choices-2.jpg */}
        <div className="pfooter1">
          <div className="pfooter2">
            <div className="pReaction">
              <div className="voteupvote">
                <div className="vote">
                  <button onClick={voteg}>
                    <div>
                      <FileUploadIcon />
                    </div>
                    <div>Upvote</div>
                    <div>{vote1}</div>
                  </button>
                </div>

                <div className="downvote tooltip">
                  <button onClick={unvoteg}>
                    <GetAppIcon />
                    {unvote1}
                  </button>
                  <span className="tooltiptext">downvote</span>
                </div>
              </div>
              <div className="pFc">
                <div className="tooltip" onClick={Opencomment1}>
                  <ModeCommentIcon />
                  <span className="tooltiptext">Answer</span>
                </div>
                <div>7</div>
              </div>
              <div className="pFc">
                <div className="tooltip">
                  <ShareIcon />
                  <span className="tooltiptext">share</span>
                </div>
                <div>54</div>
              </div>
            </div>
          </div>
          <div className="horisign">
            <MoreHorizIcon />
          </div>
        </div>
        {comment1 ? (
          <div className="pComment">
            {/* <div className='flex1 svg-icon blur-effect'><Avatar/></div> */}
            <Avatar>
              <img src="/images/profile2.webp" alt="" />
            </Avatar>
            <div className="flex2">
              <input type="text" value="Add a comment" />
            </div>
            <div className="flex3">
              <button type="submit">Add comment</button>
            </div>
          </div>
        ) : null}
        <div className="border-bottom"></div>
      </div>

      


   <div className="postContainer">
        <div className="pHeader1">
          <div className="pHeader2">
            {/* <div className='svg-icon blur-effect'> <Avatar></Avatar></div> */}
            <Avatar>
              <img src="/images/cors.jpeg" alt="" />
            </Avatar>
            <div className="ppn">
              <div className="hName">
                <div>
                  <b>Cory Watts </b>
                </div>
                <div className="follow">
                  {" "}
                  <span>*</span>Follow
                </div>
              </div>
              <div>
                Software Developer (2019-present) <span>*</span>
                <span>4h ago</span>
              </div>
            </div>
          </div>

          <div className="clearicon">
            <ClearIcon />
          </div>
        </div>
        <div>
          <h4>Which screenshot deserves 200k view and comments?</h4>
        </div>
        {/* <div><p></p></div> */}
        <div>
          <img className="post_images" src="/images/post3.jpeg" alt="" />
        </div>
        <div className="pfooter1">
          <div className="pfooter2">
            <div className="pReaction">
              <div className="voteupvote">
                <div className="vote">
                  <button onClick={voteh}>
                    <div>
                      <FileUploadIcon />
                    </div>
                    <div>Upvote</div>
                    <div>{vote2}</div>
                  </button>
                </div>

                <div className="downvote tooltip">
                  <button onClick={unvoteh}>
                    <GetAppIcon />
                    {unvote2}
                  </button>
                  <span className="tooltiptext">downvote</span>
                </div>
              </div>
              <div className="pFc">
                <div className="tooltip" onClick={Opencomment2}>
                  <ModeCommentIcon />
                  <span className="tooltiptext">Answer</span>
                </div>
                <div>100</div>
              </div>
              <div className="pFc">
                <div className="tooltip">
                  <ShareIcon />
                  <span className="tooltiptext">share</span>
                </div>
                <div>19</div>
              </div>
            </div>
          </div>
          <div className="horisign">
            <MoreHorizIcon />
          </div>
        </div>
        {comment2 ? (
          <div className="pComment">
            {/* <div className='flex1 svg-icon blur-effect'><Avatar/></div> */}
            <Avatar>
              <img src="/images/profile2.webp" alt="" />
            </Avatar>
            <div className="flex2">
              <input type="text" value="Add a comment" />
            </div>
            <div className="flex3">
              <button type="submit">Add comment</button>
            </div>
          </div>
        ) : null}
        <div className="border-bottom"></div>
      </div>
      <div className="postContainer">
        <div className="pHeader1">
          <div className="pHeader2">
            {/* <div className='svg-icon blur-effect'> <Avatar></Avatar></div> */}
            <Avatar>
              <img src="/images/cors.jpeg" alt="" />
            </Avatar>
            <div className="ppn">
              <div className="hName">
                <div>
                  <b>Cory Watts </b>
                </div>
                <div className="follow">
                  {" "}
                  <span>*</span>Follow
                </div>
              </div>
              <div>
                Software Developer (2019-present) <span>*</span>
                <span>4h ago</span>
              </div>
            </div>
          </div>

          <div className="clearicon">
            <ClearIcon />
          </div>
        </div>
        <div>
          <h4>Which screenshot deserves 200k view and comments?</h4>
        </div>
        {/* <div><p></p></div> */}
        <div>
          <img className="post_images" src="/images/post2.jpeg" alt="" />
        </div>
        <div className="pfooter1">
          <div className="pfooter2">
            <div className="pReaction">
              <div className="voteupvote">
                <div className="vote">
                  <button onClick={voteh}>
                    <div>
                      <FileUploadIcon />
                    </div>
                    <div>Upvote</div>
                    <div>{vote2}</div>
                  </button>
                </div>

                <div className="downvote tooltip">
                  <button onClick={unvoteh}>
                    <GetAppIcon />
                    {unvote2}
                  </button>
                  <span className="tooltiptext">downvote</span>
                </div>
              </div>
              <div className="pFc">
                <div className="tooltip" onClick={Opencomment2}>
                  <ModeCommentIcon />
                  <span className="tooltiptext">Answer</span>
                </div>
                <div>100</div>
              </div>
              <div className="pFc">
                <div className="tooltip">
                  <ShareIcon />
                  <span className="tooltiptext">share</span>
                </div>
                <div>19</div>
              </div>
            </div>
          </div>
          <div className="horisign">
            <MoreHorizIcon />
          </div>
        </div>
        {comment2 ? (
          <div className="pComment">
            {/* <div className='flex1 svg-icon blur-effect'><Avatar/></div> */}
            <Avatar>
              <img src="/images/profile2.webp" alt="" />
            </Avatar>
            <div className="flex2">
              <input type="text" value="Add a comment" />
            </div>
            <div className="flex3">
              <button type="submit">Add comment</button>
            </div>
          </div>
        ) : null}
        <div className="border-bottom"></div>
      </div> 
    </>
  );
}



