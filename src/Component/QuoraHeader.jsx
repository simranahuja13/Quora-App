// import
import React, { useState } from "react";
import "./css/QuoraHeader.css";
import AddCreatQ from "./AddCreatQ";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import Groups2Icon from "@mui/icons-material/Groups2";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import LanguageIcon from "@mui/icons-material/Language";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import { NavLink } from "react-router-dom";
import { grey } from "@mui/material/colors";
export default function QuoraHeader({ closeQuora }) {
  //usestate hook for displaying question and answer model popup on click button
  const [displayAddCreatQ, setDisplayAddCreatQ] = useState(false);
  const closeAddCreatQ = () => setDisplayAddCreatQ(false);
  return (
    <>
      {/* {displayAddCreatQ?<AddCreatQ closeAddCreatQ={closeAddCreatQ}/>: */}
      <div className="containerHeader">
        <div className="parentHeader">
          <div className="quoraLogo singleicon">
            <NavLink to="./QuoraBody" id="Quora">
              <img
                className="img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/800px-Quora_logo_2015.svg.png"
                alt="logo"
              />
            </NavLink>
          </div>
          <div className="homeIcon singleicon">
            <NavLink to="./QuoraBody">
              <HomeIcon sx={{ fontSize: 35, color: grey[600] }} />
            </NavLink>
          </div>
          <div className="followingIcon singleicon">
            <FeaturedPlayListIcon sx={{ fontSize: 25, color: grey[600] }} />
          </div>
          <div className="ansIcon singleicon">
            <QuickreplyIcon sx={{ fontSize: 25, color: grey[600] }} />
          </div>
          <div className="spaceIcon singleicon">
            <Groups2Icon sx={{ fontSize: 30, color: grey[600] }} />
          </div>
          <div className="notificationIcon singleicon">
            <NavLink to="/Notification">
              {" "}
              <NotificationsIcon sx={{ fontSize: 35, color: grey[600] }} />{" "}
            </NavLink>
          </div>
          <div className="headerSearchContainer singleicon">
            <div>
              <button>
                {" "}
                <SearchIcon sx={{ fontSize: 30 }} />{" "}
              </button>
              <input
                className="headerSearch"
                singleicon
                type="text"
                placeholder="search Quora"
              />
            </div>
          </div>
          <div onClick={closeQuora} className="LogOut singleicon">
            <button>LogOut</button>
          </div>
          <div className="avatarHeader">
            <PersonIcon sx={{ fontSize: 25 }} />
          </div>
          <div className="languageIcon singleicon">
            <LanguageIcon sx={{ fontSize: 25 }} />
          </div>
          <div className="addQuestionIcon singleicon">
            <button onClick={() => setDisplayAddCreatQ(true)}>
              {" "}
              Add question
            </button>
          </div>
        </div>
      </div>
      {displayAddCreatQ && <AddCreatQ closeAddCreatQ={closeAddCreatQ} />}

      {/* :null} */}
    </>
  );
}
