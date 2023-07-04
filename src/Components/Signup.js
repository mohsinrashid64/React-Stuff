import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';
import Validation from './SignupValidation';



export default function Signup(){

    const[values,setValues] = useState({
        name:'',
        email:'',
        password:''
    })
    const navigate = useNavigate();
    const [errors,setErrors] =useState({})
    const handleInput = (event)=>{
        setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.name === "" && errors.email === "" && errors.password === ""){
            axios.post("http://localhost:8081/signup",values)
            .then(res=>{
                console.log("IT WORAKS");
                navigate('/');
            })
            .catch(err=>console.log(err));
        }
    }

    return(
        <div>
            <div>
            <form action = "" onSubmit={handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input type="Name" placeholder='Enter Name' onChange={handleInput} name='name' />
                        {errors.name && <span>{errors.name}</span>}
                    </div>
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
                    <button>Sign Up</button>

                </form>
            </div>
        </div>
    );
}