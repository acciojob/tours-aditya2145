import React from 'react'
import Tour from './Tour'

const Tours = ({data, setData}) => {
    console.log(data)
    const onDelete = (id) => {
        const fData = data.filter(v=>v.id!==id);
        setData(fData);
    }
  return (
    <div>
        {data.map((v, i)=>(
            <Tour key={i} id={v.id} name={v.name} info={v.info} image={v.image} price={v.price} onDelete={()=>onDelete(v.id)} />
        ))}
    </div>
  )
}

export default Tours
