import React from 'react'

function PassedAppointment(props) {
  return (
    <div>
    <div className="container my-1">
        <div className="card">
            <div className="card  bg-gray-100  hover:bg-gray-700 hover:text-white">
                <div className="card-body">
                    <h5 className="">Name: {props.name}</h5>
                    <h6 className="">Email: {props.email}</h6>
                    <h6 className="">Contact Number: {props.phone}</h6>
                    <h6 className="">Services: {props.services}</h6>
                    <p className="card-text">Date: {props.date}</p>
                    {/* {props.flag?<p>Attended</p>:<p>Missed</p>} */}
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default PassedAppointment