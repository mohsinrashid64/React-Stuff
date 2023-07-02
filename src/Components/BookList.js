import React from "react";
import { Link } from "react-router-dom";

export default function BookList(){
    return(
        <div>
            <h1>BOOK LIST</h1>
            <Link to="/book/1">Book 1</Link>
            <Link to="/book/2">Book 2</Link>
        </div>
    )
}