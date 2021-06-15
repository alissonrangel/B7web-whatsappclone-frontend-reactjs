import React, {useState, useEffect} from 'react';



import './MessageItem.css'

export default (props) => {

  return (
    <div className="messageLine"
      style={{justifyContent: props.user.id === props.data.author? 'flex-end':'flex-start'}}>
      <div className="messageItem"
        style={{backgroundColor: props.user.id === props.data.author ? '#dcf8c6':'#fff' }}
      >
        <div className="messageText">{props.data.body}</div>
        <div className="messageDate">19:00</div>
      </div>
    </div>
  )
}