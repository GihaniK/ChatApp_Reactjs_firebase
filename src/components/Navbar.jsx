import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Sky Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/1130624/pexels-photo-1130624.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <span>Gihani</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar