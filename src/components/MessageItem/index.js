import React, {useState, useEffect} from 'react';



import './MessageItem.css'

export default (props) => {

  const [time, setTime] = useState('');

  useEffect(()=>{
    if( props.data.date > 0 ){
      let d = new Date(props.data.date.seconds * 1000);
      let hours = d.getHours();
      let minutes = d.getMinutes();
      hours = hours < 10 ? '0'+hours : hours;
      minutes = minutes < 10 ? '0'+minutes : minutes;
      setTime(`${hours}:${minutes}`);
    }
  },[props.data])

  return (
    <div className="messageLine"
      style={{justifyContent: props.user.id === props.data.author? 'flex-end':'flex-start'}}>
      <div className="messageItem"
        style={{backgroundColor: props.user.id === props.data.author ? '#dcf8c6':'#fff' }}
      >
        <div className="messageText">{props.data.body}</div>
        <div className="messageDate">{time}</div>
      </div>
    </div>
  )
}