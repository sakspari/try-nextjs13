import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className='fixed top-0 w-full text-center flex justify-between bg-teal-500 py-2 px-8'>
      <div>
        <h1 className='font-bold'>
          Learn Next JS 13
        </h1>
      </div>

      <ul className='flex justify-between w-2/12'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About(API)</Link>
        </li>
        <li>
          <Link href='/contacts'>Contacts</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header