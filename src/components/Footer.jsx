import React from 'react'

const Footer = () => {
  return (
    <div className="grid sm:flex bottom-0 w-full h-20 bg-[rgba(255,255,255,0.5)] z-10 relative backdrop-blur-xl font-bold px-[20px] sm:px-[50px] justify-between items-center">
      <div>©2023. by Georgy Aslanyan</div>
      <div className="flex gap-3">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/GeorgiyAslanyan"
          className='hover:text-green-500'
        >
          Гитхаб
        </a>
        <a target="_blank" rel="noreferrer" href="https://t.me/George1307" className='hover:text-blue-500'>
          Телеграм
        </a>
        <a href="mailto:georgiy.aslanyan13@mail.ru" className='hover:text-red-500'>
          Написать на почту
        </a>
      </div>
    </div>
  )
}

export default Footer