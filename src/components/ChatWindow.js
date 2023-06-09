import React, { useEffect, useRef, useState } from 'react'
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css'

import * as Icon from '@mui/icons-material';
import MessageItem from './MessageItem';
import Api from '../Api';

const ChatWindow = ({user, data}) => {
    const body = useRef()

    let recognition = null;

    let SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

    if(SpeechRecognition !== undefined){
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false)
    const [text, setText] = useState()
    const [listening, setListening] = useState(false)
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])

    const handleEmojiClick = (e, emojiObject) => {
        setText(text + e.emoji)
    }
    const handleOpenEmoji = () => {
        setEmojiOpen(true)
    }
    const handleCloseEmoji = () => {
        setEmojiOpen(false)
    }
    const handleMicClick = () => {
        if(recognition !== null){
            recognition.onstart = () => {
                setListening(true)
            }
            recognition.onend = () => {
                setListening(false)
            }
            recognition.onresult = (e) => {
                setText(e.results[0][0].transcript)
            }

            recognition.start()
        }
    }

    const handleInputKeyUp = (e) => {
        if(e.keyCode == 13){
            handleSendClick()
        }
    }
    const handleSendClick = () => {
        if(text !== ''){
            Api.sendMessage(data, user.id, 'text', text, users)
            setText('')
            setEmojiOpen(false)
        }
    }

    useEffect(() => {
        if(body.current.scrollHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }
    }, [list])

    useEffect(() => {
        setList([])
        let unsub = Api.onChatContent(data.chatId, setList, setUsers)
        return unsub
    }, [data.chatId])

    return(
        <div className='chatWindow'>
            <div className='chatWindow--header'>
                <div className='chatWindow--headerinfo'>
                    <img className='chatWindow--avatar' src={data.image} alt=''/>
                    <div className='chatWindow--name'>{data.title}</div>
                </div>
                <div className='chatWindow--headerbuttons'>
                    <div className='chatWindow--btn'>
                        <Icon.Search style={{color: '#919191'}} />
                        <Icon.AttachFile style={{color: '#919191'}} />
                        <Icon.MoreVert style={{color: '#919191'}} />
                    </div>
                </div>
            </div>

            <div ref={body} className='chatWindow--body'>
                {list.map((item, key) => (
                    <MessageItem
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </div>

            <div 
                className='chatWindow--emojiarea' 
                style={{height: emojiOpen ? '200px' : '0'}}
                >
                <EmojiPicker
                    width="100%"
                    onEmojiClick={handleEmojiClick}
                    searchDisabled
                    skinTonesDisabled
                />
            </div>
            <div className='chatWindow--footer'>
                <div className='chatWindow--pre'>
                    <div 
                        className='chatWindow--btn'
                        onClick={handleCloseEmoji}
                        style={{width: emojiOpen ? 40: 0}}
                    >
                        <Icon.Close style={{color: '#919191'}} />
                    </div>
                    <div 
                        className='chatWindow--btn'
                        onClick={handleOpenEmoji}
                    >
                        <Icon.EmojiEmotions style={{color: emojiOpen ? '#009688' : '#919191'}} />
                    </div>
                </div>
                <div className='chatWindow--inputarea'>
                    <input 
                        className='chatWindow--input' 
                        type='text' 
                        placeholder='Digite uma mensagem'
                        value={text}
                        onChange={e => setText(e.target.value)}
                        onKeyUp={handleInputKeyUp}
                    />
                </div>
                <div className='chatWindow--pos'>
                    {text === undefined &&
                        <div 
                            className='chatWindow--btn'
                            onClick={handleMicClick}
                        >
                            <Icon.Mic style={{color: listening ? '#126ECE' : '#919191'}} />
                        </div>
                    }
                    {text !== undefined &&
                        <div 
                            className='chatWindow--btn'
                            onClick={handleSendClick}
                        >
                            <Icon.Send style={{color: '#919191'}} />
                        </div>
                    }
                
                </div>
            </div>
        </div>
    )
}

export default ChatWindow