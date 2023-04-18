import React from 'react'
import './ChatListItem.css'

const ChatListItem = ({onclick, active}) => {
    return(
        <div className={`chatListItem ${active ? 'active':''}`} onClick={onclick}>
            <img className='chatListItem--avatar' src='https://www.nicepng.com/png/detail/207-2074901_woman-icon-avatar-icon.png' alt='' />
            <div className='chatListItem--lines'>
                <div className='chatListItem--line'>
                    <div className='chatListItem--name'>Israel</div>
                    <div className='chatListItem--date'>19:00</div>
                </div>
                <div className='chatListItem--line'>
                    <div className='chatListItem--lastMsg'>
                        <p>Uma frase qualquer de exemplo 
                        Uma frase qualquer de exemplo
                        Uma frase qualquer de exemplo
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatListItem