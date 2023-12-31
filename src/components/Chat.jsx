import React from 'react'
import Cam from "../img/cam.png"
import Add from "../img/add.ico"
import More from "../img/more.png"
import Messages from "../components/Messages"
import Input from "../components/Input"

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat