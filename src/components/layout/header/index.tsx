import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full flex justify-between bg-blue-900 text-white px-8 py-4 items-center'>
<Image src="/log2.svg" alt="logo" width={150} height={100}/>
<div className=''>
s
</div>

    </div>
  )
}

export default Header