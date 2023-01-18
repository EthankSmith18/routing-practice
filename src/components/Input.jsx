import React from 'react'
import { useParams } from "react-router";

function Input() {
    const { Input } = useParams();
    if(isNaN(Input) !== true){
        console.log(Input);
        console.log(isNaN(Input));
        return (
            <div>
                <h1>The Number is: {Input}</h1>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>The Word is: {Input}</h1>
            </div>
        )
    }
}

export default Input
