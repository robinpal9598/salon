import React from 'react'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
function AdReceipt(props) {
  let params = useParams();



  const confirmBooking = async (id) => {
    console.log(id);
    let result = await fetch(`http://localhost:4000/update/${props.id}`, {
      method: 'put',
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json',

      }
    });
    result = await result.json();
    console.log(result);
    props.setRefresh(prop => !prop);


    // props.setBook(true);

  }
  return (
    <div><div className="container my-1">
      <div className="card">
        <div className="card  bg-pink-100  hover:bg-pink-800 hover:text-white">
          <div className="card-body">
            <h5 className="">Name: {props.name}</h5>
            <h6 className="">Email: {props.email}</h6>
            <h6 className="">Contact Number: {props.phone}</h6>
            <h6 className="">Services: {props.services}</h6>
            <p className="card-text">Date: {props.date}</p>
            <button className='bordr-solid border-1 bg-gray-500 hover:text-black' onClick={() => confirmBooking(props.id)}>Confirm Appointment</button>
            {/* {props.flag?<p>booked</p>:<p>your appointment is pending we will confirm it soon..</p>} */}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AdReceipt