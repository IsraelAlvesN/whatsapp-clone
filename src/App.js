import React from 'react'
import * as Icon from '@mui/icons-material';

import './App.css'

export default () => {
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
          ...
        </div>
        <div className='chatlist'>
          ...
        </div>
      </div>
      <div className='contentarea'>
        ...
      </div>
    </div>
  )
}