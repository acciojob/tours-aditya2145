import React, { useState } from 'react'

const Tour = ({id, name, info, image, price, onDelete}) => {
    const [showMore, setShowMore] = useState(false);
  return (
    <div className='single-tour'>
        <p>{name}</p>
        <p className="tour-info" id={`tour-item-para-${id}`}>
            {showMore?info:info.slice(0,200)}
            <span id={`see-more-${id}`} style={{color: 'blue', fontWeight:'bold', cursor:'pointer'}} onClick={()=>setShowMore(!showMore)}>
                {showMore?'Show less':'See more'}
            </span>
        </p>
        <img src={image} alt="" className="" />
        <p className="tour-price">{price}</p>
        <button id={`delete-btn-${id}`} className="delete-btn btn" onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Tour
