import React, { useState } from 'react'
import * as Icon from '@mui/icons-material';

import './App.css'
import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

export default () => {
  const [chatList, setChatList] = useState([
    {chatId: 1, title: 'alguem', image: 'https://www.nicepng.com/png/detail/207-2074901_woman-icon-avatar-icon.png'},
    {chatId: 2, title: 'alguem', image: 'https://www.nicepng.com/png/detail/207-2074901_woman-icon-avatar-icon.png'},
    {chatId: 3, title: 'alguem', image: 'https://www.nicepng.com/png/detail/207-2074901_woman-icon-avatar-icon.png'}
  ]);
  const [activeChat, setActiveChat] = useState({})
  const [user, setUser] = useState({
    id: 12,
    avatar: 'https://www.nicepng.com/png/detail/207-2074901_woman-icon-avatar-icon.png',
    name: 'Eu'
  })

  return(
    <div className='app-window'>
      <div className='sidebar'> 
        <header>
          <img className='header--avatar' src={user.avatar} alt="" />
          <div className='header--buttons'>
            <div className='header--btn'>
              <Icon.DonutLarge style={{color: '#919191'}}/>
            </div>
            <div className='header--btn'>
              <Icon.Chat style={{color: '#919191'}}/>
            </div>
            <div className='header--btn'>
              <Icon.MoreVert style={{color: '#919191'}}/>
            </div>
          </div>
        </header>
        <div className='search'>
          <div className='search--input'>
            <Icon.Search fontSize='small' style={{color: '#919191'}}/>
            <input type='search' placeholder='Começar nova conversa...'/>
          </div>
        </div>
        <div className='chatlist'>
          {chatList.map((item, key)=>(
            <ChatListItem 
              key={key}
              data={item}
              active={activeChat.chatId === chatList[key].chatId}
              onclick={() => setActiveChat(chatList[key])}
            />
          ))}
        </div>
      </div>
      <div className='contentarea'>
        {activeChat.chatId !== undefined  &&
          <ChatWindow 
            user={user}
          />
        }
        {activeChat.chatId === undefined  &&
          <ChatIntro />
        }
      </div>
    </div>
  )
}