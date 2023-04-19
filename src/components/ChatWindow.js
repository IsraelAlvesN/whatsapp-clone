import React, { useState } from 'react'
import './ChatWindow.css'

import * as Icon from '@mui/icons-material';

const ChatWindow = () => {
    return(
        <div className='chatWindow'>
            <div className='chatWindow--header'>
                <div className='chatWindow--headerinfo'>
                    <img className='chatWindow--avatar' src='https://www.nicepng.com/png/detail/207-2074901_woman-icon-avatar-icon.png' alt=''/>
                    <div className='chatWindow--name'>Algum outro</div>
                </div>
                <div className='chatWindow--headerbuttons'>
                    <div className='chatWindow--btn'>
                        <Icon.Search style={{color: '#919191'}} />
                        <Icon.AttachFile style={{color: '#919191'}} />
                        <Icon.MoreVert style={{color: '#919191'}} />
                    </div>
                </div>
            </div>
            <div className='chatWindow--body'>

            </div>
            <div className='chatWindow--footer'>
                <div className='chatWindow--pre'>
                    <div className='chatWindow--btn'>
                        <Icon.EmojiEmotions style={{color: '#919191'}} />
                    </div>
                </div>
                <div className='chatWindow--inputarea'>
                    <input 
                        className='chatWindow--input' 
                        type='text' 
                        placeholder='Digite uma mensagem'
                    />
                </div>
                <div className='chatWindow--pos'>
                    <div className='chatWindow--btn'>
                        <Icon.Send style={{color: '#919191'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatWindow