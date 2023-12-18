import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/Notificationbody.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
function NotificationBody() {
  return (
    <>
       <div className="Notification_body_container">
        
      <div className='line1'>         
      <h4>Notifications</h4>
      <p> Settings</p>
      </div>
       <div className='singleNotificationstyl'>
              <div className='profileLogo svg-icon'><Avatar/></div>
              <div className='notifiparagraph'><span>Daily Dose of Idioms</span><span className='star'>*</span><span>October 24</span><h3>Idiom #1167 - 'To Have One Back Against The Wall'</h3>
              <p>Read this and 15 more new items.</p>
              </div>
              <div className='tripaldot'><MoreHorizIcon/></div>
       </div>
       <div className='singleNotificationstyl'>
        <div className='profileLogo svg-icon'><Avatar/></div>
        <div className='notifiparagraph'><span>Daily Dose Of Vocabulary</span><span className='star'>*</span><span>October 24</span>
        <h3>Word #1401 - 'Aglow'</h3>
        <p>Read this and 15 more new items.</p>
        </div>
        <div  className='tripaldot'><MoreHorizIcon/></div>
       </div>
       <div className='singleNotificationstyl'>
           <div className='profileLogo svg-icon'><Avatar/></div>
           <div className='notifiparagraph'><span>Highlighted in Success and Happiness</span><span className='star'>*</span><span>Posted by Shahrukh Sunny leony</span><span className='star'>*</span><span>October 21</span>
           <h3>The Question is React is an efficient, flexible, and open-source JavaScript framework library that allows developers to the creation of simple, fast, and scalable web applications. Jordan Walke, a software engineer who was working for Facebook created React. It was first deployed on the news feed of Facebook in 2011 and on Instagram in 2012.</h3></div>
           <div  className='tripaldot'><MoreHorizIcon/></div>
       </div>
      
      </div>
    </>
  )
}

export default NotificationBody
