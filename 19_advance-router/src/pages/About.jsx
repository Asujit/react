import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <div className='flex justify-center gap-10 py-4'>
            <Link className='text-xl font-semibold' to='/about/men'>Men</Link>
            <Link className='text-xl font-semibold' to='/about/women'>Women</Link>
            <Link className='text-xl font-semibold' to='/about/kids'>Kids</Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default About