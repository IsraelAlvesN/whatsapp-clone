import React, { useState } from "react";
import './NewChat.css'

import * as Icon from '@mui/icons-material';

export default ({chatList, user, show, setShow}) => {
    const [list, setlist] = useState([
        {
            id: 123, 
            avatar: 'https://www.nicepng.com/png/detail/207-2074901_woman-icon-avatar-icon.png',
            name: 'Eu'
        },
        {
            id: 123, 
            avatar: 'https://www.nicepng.com/png/detail/207-2074901_woman-icon-avatar-icon.png',
            name: 'Eu'
        },
        {
            id: 123, 
            avatar: 'https://www.nicepng.com/png/detail/207-2074901_woman-icon-avatar-icon.png',
            name: 'Eu'
        },
    ])

    const handleClose = () => {
        setShow(false)
    }

    return(
        <div className="newChat" style={{left: show ? 0 : -415}}>
            <div className="newChat--head">
                <div onClick={handleClose} className="newChat--backbutton">
                    <Icon.ArrowBack style={{color: '#FFF'}} />
                </div>
                <div className="newChat--headtitle">Nova Conversa</div>
            </div>
            <div className="newChat--list">
                {list.map((item, key) => (
                    <div className="newChat--item" key={key}>
                        <img className="newChat--itemavatar" src={item.avatar} alt="" />
                        <div className="newChat--itemname">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}