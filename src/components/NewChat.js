import React, { useEffect, useState } from "react";
import './NewChat.css'

import * as Icon from '@mui/icons-material';
import Api from "../Api";

export default ({chatList, user, show, setShow}) => {
    const [list, setlist] = useState()

    const handleClose = () => {
        setShow(false)
    }

    useEffect(() => {
        const getList = async () => {
            if(user !== null){
                let results = await Api.getContactList(user.id)
                setlist(results)
            }
        }
        getList()
    }, [user])

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