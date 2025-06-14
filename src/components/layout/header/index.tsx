import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full flex justify-between '>
<Image src="/logo.svg" alt="logo" width={100} height={100}/>


    </div>
  )
}

export default Header