import React, {useState, useEffect} from 'react';
import './App.css';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';

import logo from './logo.svg';


import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

function App() {

  const [chatList, setChatList] = useState([
    {chatId: 1, title: 'Fulano de tal', image:'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 2, title: 'Fulano de tal', image:'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 3, title: 'Fulano de tal', image:'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 4, title: 'Fulano de tal', image:'https://www.w3schools.com/howto/img_avatar2.png'}
  ]);
  const [activeChat, setActiveChat] = useState({});

  const [user, setUser] = useState({
    id: 1234,
    name: 'Alisson Rangel',
    avatar: 'https://avatars.githubusercontent.com/u/8989215?s=60&v=4'
  })

  const [showNewChat, setShowNewChat] = useState(false);

  return (
    <div className="app-window">
      <div className="sidebar">
        
        <NewChat 
          chatlist={chatList}
          show={showNewChat} 
          setShow={setShowNewChat} 
          user={user} 
        />
        <header>
          <img className="header--avatar" src={user.avatar} alt="" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{color: '#919191'}} />
            </div>
            <div onClick={()=>setShowNewChat(true)} className="header--btn">
              <ChatIcon style={{color: '#919191'}} />
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{color: '#919191'}} />
            </div>
          </div>
        </header>
        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{color: '#919191'}} />
            <input type="search" placeholder="Procurar ou começar uma nova conversa" />
          </div>
        </div>
        <div className="chatlist">
          { chatList.map((item, index)=>(
            <ChatListItem 
              key={index}
              data={item}
              active={ activeChat.chatId === chatList[index].chatId}
              onClick={()=>setActiveChat(chatList[index])}
            />
          ))

          }
        </div>
      </div>
      <div className="contentarea">
        { activeChat.chatId !== undefined && 
          <ChatWindow 
            activeChat={activeChat} 
            user={user}
          />
        }
        { activeChat.chatId === undefined && 
          <ChatIntro />
        }
      </div>
    </div>
  );
}

export default App;
