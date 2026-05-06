import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (data) => {
  return (
    <div className='py-10 flex gap-10 items-center h-[90vh] px-18'>
        <LeftContent/>
        <RightContent users={data.users}/>
    </div>
  )
}

export default Page1Content