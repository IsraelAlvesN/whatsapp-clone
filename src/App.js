import React, { useState } from 'react'
import * as Icon from '@mui/icons-material';

import './App.css'
import ChatListItem from './components/ChatListItem';

export default () => {
  const [chatList, setChatList] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]);

  return(
    <div className='app-window'>
      <div className='sidebar'> 
        <header>
          <img className='header--avatar' src="https://www.nicepng.com/png/detail/207-2074901_woman-icon-avatar-icon.png" alt="" />
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
            />
          ))}
        </div>
      </div>
      <div className='contentarea'>
        ...
      </div>
    </div>
  )
}