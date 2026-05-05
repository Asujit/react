import React from 'react'

const Card = (props) => {

    
  return (
    <div className="card">
        <div className="top">
            <img src={props.image} alt="Image" className="image" />
            <button className="savebtn">Save</button>
        </div>
        <p className="comp">{props.company}</p>
        <p className="title">{props.title}</p>

        <div className="sections">
            <button className="btn">First</button>
            <button className="btn">Second</button>
        </div>

        <div className="footer">
            <div className="left">
                <p className="price">{props.price}</p>
                <p className="subtext">{props.subtext}</p>
            </div>

            <button className="apply">Apply Now</button>
        </div>
    </div>
  )
}

export default Card