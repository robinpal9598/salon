import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Receipt from './Receipt';
import { useState,useEffect } from 'react';
import PassedAppointment from './PassedAppointment';
const currDate=new Date();
function Profile() {
    const[receipt,setReceipt]=useState([]);
    const[prev,setPrev]=useState([]);
    //calling an API to get all the appointment receipts of the user
  const getReceipt=async(e)=>{
    
    let result=await fetch('http://localhost:4000/receipt',{
        method:'get',
        headers:{
            'Content-Type':'application/json',
            'auth-token':localStorage.getItem('token'),
        }
    })
    result=await result.json();
    setReceipt(result);
   console.log(result.length);
  }


  const prevReceipt=async(e)=>{
    
    let result=await fetch('http://localhost:4000/prevReceipt',{
        method:'get',
        headers:{
            'Content-Type':'application/json',
            'auth-token':localStorage.getItem('token'),
        }
    })
    result=await result.json();
    setPrev(result);
   console.log(result.length);
  }
 

  useEffect((e) => {

   getReceipt();
   prevReceipt();
  }, [])
  
    let navigate=useNavigate();
    let name = localStorage.getItem('name');
    let mail = localStorage.getItem('email');
    const logout=()=>{
        localStorage.clear();
        navigate('/');
    }

    return (

        <>
            <div className="profile border-2 border-solid rounded-3xl sm:w-2/3 mx-auto ">
                <div className="top flex justify-between mx-7">
                    <div className="logo border-1 border-solid rounded-full text-3xl font-bold py-2 px-3  bg-green-400">{name[0].toUpperCase()}</div>
                    <div className="name text-2xl font-bold my-auto">{name.toUpperCase()}</div>
                </div>
                <div className="bottom flex justify-center my-10">
                    {mail}
                </div>
                <div className="receipt text-3xl flex justify-center">Your Appointment Receipts</div>
                <div className="appointments  grid sm:grid-cols-2   py-5">
                    {
                        receipt.length > 0?
                        receipt.map((item)=>
                        <>
                          <Receipt key={item._id} name={item.name} flag={item.flag} phone={item.phone} email={item.email} date={item.date.split('T')[0]} services={item.services.join(', ')} />
                        
                        </>
                        ):    
                        <div className="no">no appointment</div>
                    }
                  
                </div>


                <div className="receipt text-3xl flex justify-center">Your Previous Appointment</div>
                <div className="appointments  grid sm:grid-cols-2   py-5">
                    {
                        prev.length > 0?
                        prev.map((item)=>
                        <>
                          <PassedAppointment key={item._id} name={item.name} flag={item.flag} phone={item.phone} email={item.email} date={item.date.split('T')[0]} services={item.services.join(', ')} />
                        
                        </>
                        ):    
                        <div className="no">no previous appointment</div>
                    }
                  
                </div>

                <button className='sm:ml-[90%] ml-4  mb-10 border-1 border-solid bg-pink-800 text-white px-2 py-1' onClick={logout}>Log out</button>
            </div>

        </>
    )
}

export default Profile