import React from 'react'

const Navbar = () => {
  return (
    <div className="justify-between text-white flex py-6 px-10 fixed w-full text-sm z-50">
        <div className='gap-10 flex'>
            <a href='#'>About us</a>
            <a href="#">Projects</a>
        </div>
        <div>

        </div>
        <div className='gap-10 flex'>
          <a href="#">Current</a>
          <a href="#">Contact</a>
        </div>
    </div>
  )
}

export default Navbar