import React from "react";
import { useParams } from "react-router-dom";


export default function Book(){
    const {id} = useParams()
    return(
        <div>
            <h1>BOOK {id}</h1>
        </div>
    )
}