import React, { useState } from 'react'
import * as Icon from '@mui/icons-material';

import './App.css'
import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import Login from './components/Login';
import Api from './Api';

export default () => {
  const [chatList, setChatList] = useState([
    {chatId: 1, title: 'alguem', image: 'https://www.nicepng.com/png/detail/207-2074901_woman-icon-avatar-icon.png'},
    {chatId: 2, title: 'alguem', image: 'https://www.nicepng.com/png/detail/207-2074901_woman-icon-avatar-icon.png'},
    {chatId: 3, title: 'alguem', image: 'https://www.nicepng.com/png/detail/207-2074901_woman-icon-avatar-icon.png'}
  ]);
  const [activeChat, setActiveChat] = useState({})
  const [user, setUser] = useState(null)
  const [showNewChat, setShowNewChat] = useState(false)

  const handleNewChat = () => {
    setShowNewChat(true)
  }

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoUrl
    }
    await Api.addUser(newUser)
    setUser(newUser)
  }

  //se não existe usuário, mostra apenas tela de login
  if(user === null){
    return(
      <Login onReceive={handleLoginData} />
    )
  }

  return(
    <div className='app-window'>
      <div className='sidebar'> 
        <NewChat 
          chatList={chatList}
          user={user}
          show={showNewChat} 
          setShow={setShowNewChat} 
        />
        <header>
          <img className='header--avatar' src={user.avatar} alt="" />
          <div className='header--buttons'>
            <div className='header--btn'>
              <Icon.DonutLarge style={{color: '#919191'}}/>
            </div>
            <div onClick={handleNewChat} className='header--btn'>
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