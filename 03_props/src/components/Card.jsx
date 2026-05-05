import React from 'react'

const Card = (prop) => {

    // console.log(prop);
    // console.log(prop.age);
  return (
    <div className="parent">
      <div className="card">
        <img src={prop.img} alt="ProfileImage" className="profile"/>

        <h1 className="name">{prop.name} & {prop.age}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          deserunt?
        </p>

        <button className="btn">View Profile</button>
      </div>
    </div>
  )
}

export default Card