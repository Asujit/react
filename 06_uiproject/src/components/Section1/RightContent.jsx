import React from 'react'
import RightCard from './RightCard'

const RightContent = (data) => {

  console.log(data)
  return (
    <div id='right' className='h-full w-2/3 p-6 flex flex-nowrap overflow-x-auto gap-10 '>
        {data.users.map((item) =>{
          return <RightCard id={item.id} img={item.img} intro={item.intro} tag={item.tag}/>
        })}
    </div>
  )
}

export default RightContent