import React from 'react'
import { useState,useEffect } from 'react';
import AdReceipt from './AdReceipt';
import TodaysSchema from './TodaysSchema';
function TodaysAppointment() {
    const[receipt,setReceipt]=useState([]);
    const getTodaysReceipt=async(e)=>{
    
        let result=await fetch('http://localhost:4000/todays',{
            method:'get',
            headers:{
                'Content-Type':'application/json',
                
            }
        })
        result=await result.json();
        setReceipt(result);
       
      }
      useEffect(() => {
        getTodaysReceipt();
      }, [])

  return (
    <div>
        <div className="heading flex justify-center text-3xl">Today's Appointment</div>
        <div className="content sm:px-5 ">
        <div className="bookings grid sm:grid-cols-2 py-5">
           {
                        receipt.length > 0?
                        receipt.map((item)=>
                        <>
                          <TodaysSchema   key={item._id} id={item._id} name={item.name} flag={item.flag} phone={item.phone} email={item.email} date={item.date.split('T')[0]} services={item.services.join(', ')} />
                        </>
                        ):    
                        <div className="no">No Appointments for today</div>
                    }
              
           </div>
        </div>
    </div>
  )
}

export default TodaysAppointment