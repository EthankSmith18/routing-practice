import React from 'react'
import { useParams } from "react-router";

function Colors() {
    const { Word, Color1, Color2 } = useParams();


  return (
    <div>
        <h1 style={{color:Color1, backgroundColor:Color2}}>The Word is: {Word}</h1>
        <h2>{Color1}</h2>
        <h2>{Color2}</h2>
    </div>
  )
}

export default Colors