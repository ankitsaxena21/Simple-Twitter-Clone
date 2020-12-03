/* eslint-disable */
import React from "react";
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
  FaClipboardList,
  FaUserAlt,
  FaMehBlank,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a >
            <FaTwitter className="icons logo" />
          </a>
        </li>
        <li>
          <a >
            <FaHome className="icons logo" />
            Home
          </a>
        </li>
        <li>
          <a >
            <FaHashtag className="icons" /> Explore
          </a>
        </li>
        <li>
          <a >
            <FaRegBell className="icons" /> Notifications
          </a>
        </li>
        <li>
          <a >
            <FaRegEnvelope className="icons" /> Messages
          </a>
        </li>
        <li>
          <a >
            <FaRegBookmark className="icons" /> Bookmarks
          </a>
        </li>
        <li>
          <a >
            <FaClipboardList className="icons" /> Lists
          </a>
        </li>
        <li>
          <a >
            <FaUserAlt className="icons" /> Profile
          </a>
        </li>
        <li>
          <a >
            <FaMehBlank className="icons" /> More
          </a>
        </li>
        <div className="sidebar__Btn">
          <a >Profile</a>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
