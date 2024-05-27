import React from 'react'
import "./list.css"
import ChatList from './chatList/chatList'
import UserInfo from './userInfo/userInfo'

const list = () => {
  return (
    <div className='list'>
      <UserInfo/>
      <ChatList/>
    </div>
  )
}

export default list
