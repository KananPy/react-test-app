import React, { useState } from 'react'
import {Card as Miri} from './Card'

function CardContainer({data}) {

    const [text, setText] = useState()
 

    const handleClick = () => {
        setText('')
        
    }

  return (
    <div>
        <input value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={handleClick}>Search</button>
        <Miri name={data.name} age={data.age} txt={data.occupation}/>
    </div>
  )
}



export default CardContainer