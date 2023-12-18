

import React, { useEffect, useState } from 'react';
import './css/AddCreatQ.css';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import GroupIcon from '@mui/icons-material/Group';
import { usePostContext } from './PostContext';

function AddCreatQ({ closeAddCreatQ}) {

  const {  updatePostData } = usePostContext();
  
  const [inputValue,setInputValue] = useState({
    question:"",
    paragraph:"",
    img:"",
  });
  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

const handleInputChange = (e) => {
  const {name,value} = e.target;
     setInputValue({...inputValue,[name]:value});
}

  // const handleAddQuestion = () => {
  //   updatePostData(inputValue);
  //   setInputValue({
  //     question:"",
  //     paragraph:"",
  //     img:"",
  //   })
  //   closeAddCreatQ(); 
  // };

  const handleAddQuestion = () => {
    const updatedInputValue = { ...inputValue };

    if (image) {
      const imageUrl = URL.createObjectURL(image);
      console.log(imageUrl)
      updatedInputValue.img = imageUrl;
    }

    updatePostData(updatedInputValue);

    setInputValue({
      question: "",
      paragraph: "",
      img: image ? URL.createObjectURL(image) : "",
    });

    setImage(null);

    closeAddCreatQ();
  };

  const [displayCPModal, setDisplayCPModal] = useState(true);

  // Use useEffect to control the body overflow
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, []);

  

  return (
    <>
      <div onClick={closeAddCreatQ} className="AddCreatQ_wrapper"></div>
      <div className="AddCreatQs">
        <div className="container_addCreatQ">
          {displayCPModal ? (
            <div onClick={closeAddCreatQ}>
              <CloseIcon />
            </div>
          ) : (
            <div className="PriPubFri">
              <div className="flexRow">
                <div>
                  <PublicIcon />
                </div>
                <div>
                  <select name="" id="">
                    <option value="">Private</option>
                    <option value="">Public</option>
                    <option value="">Friends</option>
                  </select>
                </div>
              </div>
            </div>
          )}
          <div className="line2">
            <div id="AddQ">
              <button onClick={() => setDisplayCPModal(true)}>Add Question</button>
            </div>
            <div id="CreatQ">
              <button onClick={() => setDisplayCPModal(false)}>Create Post</button>
            </div>
          </div>
          <div className="bottomborder_container">
            {displayCPModal ? <div className="abottom_border"></div> : <div className="bbottom_border"></div>}
          </div>
          {displayCPModal ? (
            <div className="info">
              <h4>Tips on getting a good answer quickly</h4>
              <ul>
                <li>Make sure your question has not been asked already</li>
                <li>Keep your question short and to the point</li>
                <li>Double-check grammar and spelling</li>
              </ul>
            </div>
          ) : (
            <div className="line4">
            <div className="avatar svg-icon">
              <Avatar />
            </div>
            <div>
              <ArrowRightIcon />
            </div>
            <div>
              <button>
                <GroupIcon />
                <sup>Public</sup>
              </button>
            </div>
          </div>
          )}
          
          {displayCPModal ? (
            <div className="quistionInputField">
              {/* <input type="text"  onChange={handleInputChange} placeholder='Start your Question with "What","How"."Why" etc' /> */}
          
              <input
          type="text"
          name='question'
          onChange={handleInputChange}
          placeholder='Start your Question with "What","How"."Why" etc'
        />


            <div className='whiteSpace'></div>
            </div>
            
          ) : (
            <div className="textarea1">
              <textarea name="paragraph" onChange={handleInputChange} id=""></textarea>
            </div>
          )}
          <div className="line6">
            <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>
            <div>
              <button className="Cancelbtn" onClick={closeAddCreatQ}>
                Cancel
              </button>
            </div>
            <div>
              {displayCPModal ? (
                <button className="AddButton" value={inputValue.question}  onClick={handleAddQuestion} >
                  Add Question
                </button>
              ) : (
                <button className="AddButton" value={inputValue.paragraph} onClick={handleAddQuestion}>POST</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCreatQ;


