import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div>

            <div className="">

                <div className=" flex justify-around bg-pink-900 py-5  text-white">
                    <Link className="nav-link hover:text-xl" aria-current="/" to="/">Home</Link>
                    <Link className="nav-link hover:text-xl" to="/todays">Todays Appointment</Link>
                    <Link className="nav-link hover:text-xl" to="/blog">Write Blogs</Link>
                    <Link className="nav-link hover:text-xl" to="/beautyBlogs">Blogs</Link>

                </div>
            </div>

        </div>
    )
}

export default Navbar