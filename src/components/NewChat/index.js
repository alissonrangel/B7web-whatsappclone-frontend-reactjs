import React, {useState, useEffect, useRef} from 'react';

import EmojiPicher from 'emoji-picker-react';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './NewChat.css'

import MessageItem from '../MessageItem';

export default ({user, setShow, show, chatlist}) => {

  const [list, setList] = useState([
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name:'Bonieky Lacerda'},
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name:'Bonieky Lacerda'},
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name:'Bonieky Lacerda'},
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name:'Bonieky Lacerda'}
  ])

  return (
    <div className="newChat" style={{left: show ? 0 : -420 }}>
      <div className="newChat--head">
        <div onClick={()=>setShow(false)} className="newChat--backButton">
          <ArrowBackIcon style={{color: '#fff'}} />
        </div>
        <div className="newChat--headtitle">
          Nova Conversa
        </div>
      </div>
      <div className="newChat--list" >
        {list.map((item, key)=>(
          <div className="newChat--item" key={key}>
            <img className="newChat--itemavatar" src={item.avatar} alt="" />
            <div className="newChat--itemname" >{item.name}</div>
          </div>

        ))}
      </div>
    </div>
  )
}