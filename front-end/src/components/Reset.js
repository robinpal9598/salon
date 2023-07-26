import React from 'react'

import {useState} from 'react';
const BASE_URL=process.env.REACT_APP_BASE_URL;
const Reset = () => {
    const[email,setEmail]=useState("");
    const handleSubmit=async(e)=>{
      e.preventDefault();
      fetch(`${BASE_URL}/forgot-password`,{
        method:"post",
        headers:{
            "content-Type":"application/json",
        },
        body:JSON.stringify({
            email
        })
      })
    }
    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" onChange={(e)=>setEmail({email:e.target.value})} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Reset