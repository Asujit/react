import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section1 = (data) => {
  return (
    <div className='h-screen w-full'>
        <Navbar/>
        <Page1Content users={data.users}/>
    </div>
  )
}

export default Section1