import React from 'react'

function TodaysSchema(props) {
  return (
    <div>
        <div className="card mx-2 my-2">
        <div className="card  bg-pink-100  hover:bg-pink-800 hover:text-white">
          <div className="card-body">
            <h5 className="">Name: {props.name}</h5>
            <h6 className="">Email: {props.email}</h6>
            <h6 className="">Contact Number: {props.phone}</h6>
            <h6 className="">Services: {props.services}</h6>
            <p className="card-text">Date: {props.date}</p>
            {props.flag?<p className='flex'><img className='w-7 h-7' src="https://static.vecteezy.com/system/resources/thumbnails/018/842/767/small/like-or-correct-symbol-confirmed-or-approved-button-check-mark-icon-3d-illustration-free-png.png" alt="" />Confirmed</p>:<p className='flex'><img className='w-16 h-16' src="https://www.psdstamps.com/wp-content/uploads/2022/04/pending-stamp-png.png" alt="" />Your Appointment is pending, we will confirm it soon...</p>}
          </div>
        </div>
        
      </div>
    </div>
    
  )
}

export default TodaysSchema