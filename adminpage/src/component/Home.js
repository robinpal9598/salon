import React from 'react'
import { useState,useEffect } from 'react';
import AdReceipt from './AdReceipt';
function Home() {
    const[refresh,setRefresh]=useState();
    const[receipt,setReceipt]=useState([]);
    const[book,setBook]=useState();
    const getReceipt=async(e)=>{
    
        let result=await fetch('http://localhost:4000/pending',{
            method:'get',
            headers:{
                'Content-Type':'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5ZmExZjg5OWM5NDU0ZDQ1NGVhZTlmIn0sImlhdCI6MTY4OTEyOTMzMX0.9whFVJF-HVwz6E8v25eLu_EV8Ro-YVuBxPQQcf4sFeA',
            }
        })
        result=await result.json();
        setReceipt(result);
       
      }


      

      
      useEffect(() => {
        getReceipt();
      }, [refresh])
      

  return (
    <div>
        <div className="top flex justify-center text-3xl">
           Admin Page of Blueberry salon
        </div>
        <div className="mid ">
           <div className="heading flex justify-center my-5 text-2xl">Appointment that need your tick to be confirmed</div>
           <div className="bookings">
           {
                        receipt.length > 0?
                        receipt.map((item)=>
                        <>
                          <AdReceipt setRefresh={setRefresh} setBook={setBook} key={item._id} id={item._id} name={item.name} flag={item.flag} phone={item.phone} email={item.email} date={item.date.split('T')[0]} services={item.services.join(', ')} />
                        </>
                        ):    
                        <div className="no">No Pending  appointment to be confirmed</div>
                    }
              
           </div>
        </div>
    </div>
  )
}

export default Home