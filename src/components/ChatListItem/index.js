import React, {useState, useEffect} from 'react';

import './ChatListItem.css'

export default (props) => {

  const [time, setTime] = useState('');

  useEffect(()=>{
    if( props.data.lastMessageDate > 0 ){
      let d = new Date(props.data.lastMessageDate.seconds * 1000);
      let hours = d.getHours();
      let minutes = d.getMinutes();
      hours = hours < 10 ? '0'+hours : hours;
      minutes = minutes < 10 ? '0'+minutes : minutes;
      setTime(`${hours}:${minutes}`);
    }
  },[props.data])
  
  return (
    <div className={`chatlistitem ${props.active? 'active':''}`}
      onClick={props.onClick}
    >

      <img className="chatlistitem--avatar" src={props.data.image} alt="" />
      <div className="chatlistitem--lines">
        <div className="chatlistitem--line">
          <div className="chatListItem--name">{props.data.title}</div>
          <div className="chatListItem--date">{time}</div>
        </div>  
        <div className="chatlistitem--line">
          <div className="chatListItem--lastMsg">
            <p>{props.data.lastMessage}</p>
          </div>
        </div>  
      </div>
    </div>
  );
}