import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
// import Login from './components/Login';
import Register from './Login';
function Navbar(props) {
    let name=localStorage.getItem('name');
    
    return (
       
        <>
            <div className="container  mx-0 px-0">
                <div className="top flex    bg-black opacity-90 text-white py-2 justify-between ">
                    <div className="left mx-3 sm:mx-10 md:mx-20 text-2xl font-bold font-serif">
                        BlueBerry Salon
                    </div>
                    <div className="right mx-2 sm:mx-10 md:mx-20 flex space-x-5">
                        <div className="right1 cursor-pointer"><Link to='/login'>{!localStorage.getItem('token')?<><Link to='/login'>Log in</Link >{props.setflag(flag=>!flag)}</>:<><Link to='/profile'><div className="letter border-1 border-white border-solid rounded-3xl px-2">{name[0].toUpperCase()}</div></Link>{props.setflag(flag=>!flag)}</>}</Link></div>
                    </div>
                </div>
                <div className="bottom 	py-4  bg-black text-white	">
                    <ul className='  flex justify-evenly text-xs sm:text-xl'>
                        <Link className='cursor-pointer  hover:text-pink-600 ' to="/" >Home</Link>

                        {/*........................................................................//modal//................................................................................................. */}
                        <button type="text" className=" hover:text-pink-600" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Services
                        </button>
                        <div className=".modal-fullscreen-sm-down modal fade w-screen text-black" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content bg-gray-200 opacity-100">
                                    <h1 className="flex justify-center text-3xl">Our Services</h1>
                                    <div className="modal-header">
                                        <div className="services flex space-x-0 text-sm">
                                            <ul className='px-2'>
                                                <ul className='px-2'>
                                                    <Link to="/skinCare" className='text-2xl cursor-pointer'>Skin Care</Link>
                                                    <li>Skin Care-Treatments</li>
                                                    <li>Body Care</li>
                                                    <li>Skin Care</li>
                                                    <li>Skin Care-Basics</li>
                                                    <li>All Skin Services</li>
                                                    <li>All Hand and Feet Services</li>
                                                </ul>

                                                <Link to="/hairCare" className='text-2xl cursor-pointer'>Hair</Link>
                                                <li>Form</li>
                                                <li>Hair Care</li>
                                                <li>Colors</li>
                                                <li>Styling</li>
                                                <li>Haircut</li>
                                                <li>All Hair Services</li>
                                            </ul>
                                            <ul className='px-2'>
                                                <Link  to="/makeup"  className='text-2xl cursor-pointer'>Makeup</Link>
                                                <li>Styling</li>
                                                <li>Saree Drape</li>
                                                <li>Makeup</li>
                                                <li>All Makeup Services</li>
                                            </ul>

                                        </div>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary text-black" data-bs-dismiss="modal">Close</button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link className='cursor-pointer  hover:text-pink-600 ' to="/bridal" >Bridal</Link>
                        <Link className='cursor-pointer  hover:text-pink-600 ' to="/blogs" >Beauty Hacks</Link>
                        
                        {name?<><Link className='cursor-pointer  hover:text-pink-600 ' to='/appointment'>Book Appointment</Link></>: <Link className='cursor-pointer  hover:text-pink-600 ' to='/login'>Book Appointment</Link>} 
                       
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar