import React, {useState, useEffect} from 'react';

import './ChatListItem.css'

export default (props) => {

  return (
    <div className={`chatlistitem ${props.active? 'active':''}`}
      onClick={props.onClick}
    >

      <img className="chatlistitem--avatar" src={props.data.image} alt="" />
      <div className="chatlistitem--lines">
        <div className="chatlistitem--line">
          <div className="chatListItem--name">{props.data.title}</div>
          <div className="chatListItem--date">19:00</div>
        </div>  
        <div className="chatlistitem--line">
          <div className="chatListItem--lastMsg">
            <p>I can see filename here. But files lives in different folders and it doesn't seems for me like a convenient way to get and link to the file.</p>
          </div>
        </div>  
      </div>
    </div>
  );
}