import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Validation from './LoginValidation';

export default function Login(){
    const[values,setValues] = useState({
        email:'',
        password:''
    })
    const [errors,setErrors] =useState({})
    const handleInput = (event)=>{
        setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validation(values))
    }
    return(
        <div>
            <div>
                <form action = "" onSubmit={handleSubmit}>
                    <div>
                        <label>Email</label>
                        <input type="email" placeholder='Enter Email' onChange={handleInput} name='email'/>
                        {errors.email && <span>{errors.email}</span>}
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" placeholder='Enter Password' onChange={handleInput} name='password'/>
                        {errors.password && <span >{errors.password} </span>}
                    </div>
                    <button>Log in</button>

                    <Link to='signup'>Create Account</Link>
                </form> 
            </div>
        </div>
    );
}