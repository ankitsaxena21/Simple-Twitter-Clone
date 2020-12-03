import React from 'react';
import {
    FaRegCheckCircle,
    FaComment,
    FaRegChartBar,
    FaHeart,
    FaLeaf,
  } from "react-icons/fa";
  
export default function Post({content}) {
  return (
    <>
        <div className="postss">
      <div className="postss__first">
        <div className="posts__first__img">
          <img src="/images/profile.png" alt="profile img" />
        </div>
        <div className="posts__first__name">
          <strong>Ankit Saxena</strong> <FaRegCheckCircle className="verify" />
        </div>
        <div className="posts__first__username">
          @ankit12 <span>6m</span>
        </div>
      </div>
      <div className="postss__details">
        <div className="postss__details__msg">
          {content}
        </div>
        <div className="reactions">
          <span>
            <FaComment className="re" /> 45
          </span>
          <span>
            <FaRegChartBar className="re" /> 4
          </span>
          <span>
            <FaHeart className="re" /> 345
          </span>
          <span>
            <FaLeaf className="re" /> 234
          </span>
        </div>
      </div>
    </div>
    </>
  );
}
