import React from 'react'
import { useState, useEffect } from 'react'
const BASE_URL=process.env.REACT_APP_BASE_URL;
import { Link ,useNavigate } from 'react-router-dom';
function Register() {
    const navigate=useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let handleClick = async (e) => {
        e.preventDefault();


        try {
            const result =await fetch(`${BASE_URL}/login`, {
                method: "post",
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json',
                    
                },
            })

           const json = await result.json();
            console.log(json.errors);
            if(!json.success)
            {
                alert(json.errors);
            }
            else
            {
                localStorage.setItem('token',json.token);
                localStorage.setItem('name',json.name);
                localStorage.setItem('email',json.email);
                localStorage.setItem('user',json.userId)
               
                navigate('/')

            }
        }
        catch (error) {
            console.log(error);
            
        }


    }
    return (
        <>
            <div className="signup">
                <form className=' mx-auto my-10 px-10 space-y-5 sm:bg-pink-100 sm:w-1/3 sm:border-solid sm:border-5 sm:rounded-xl sm:shadow-2xl sm:py-10 sm:border-pink-800 sm:px-10'>
                    <div className="form-group ">
                        <label htmlFor="exampleInputEmail1" className='text-pink-900 font-bold'>Email address</label>
                        <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted"></small>
                    </div>
                   
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className='text-pink-900 font-bold'>Password</label>
                        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} autoComplete="on" value={password} id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button onClick={handleClick}   className="bg-pink-700 px-10 py-1 my-6 rounded-xl text-white  hover:bg-pink-800 cursor-pointer">Log in</button>
                    <Link className='mx-10 cursor-pointer underline' to="/register">new user</Link>
                </form>
               
            </div>
        </>
    )
}

export default Register