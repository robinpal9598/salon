import React from 'react'
import Trending from './Trending'
import Footer from './Footer'
function Home() {
    return (
        <>
            <div className="container w-full px-0">
                <div className=" bg-black w-full ">
                    s
                    <div className="img w-3/4 h-3/4 mx-auto my-2">
                        <img src="https://www.vervemagazine.in/wp-content/plugins/awesome-gallery/resize.php?src=https%3A%2F%2Fwww.vervemagazine.in%2Fwp-content%2Fuploads%2F2014%2F01%2FSabyasachi-bridal.jpg&h=500" alt="" />
                    </div>

                </div>
                {/* bottom component...................................................................................................................................... */}
                <div className=" bottom px-4  bg-gray-200 w-full">
                    <div className="recommended font-black  text-2xl flex mt-10 justify-center  ">
                        RECOMMENDED SERVICES
                    </div>
                    <div className="content text-xl mt-5 ">
                        Our runway experts have curated some of the most popular services at Lakmé Salon, just for you.
                        Take your pick and head to your nearest salon and get started on your makeover!
                    </div>
                    <div className="cards pt-10 sm:flex sm:px-10  ">
                        <div className="card  sm:w-50  w-full hover:scale-105 transition duration-500 cursor-pointer bg-white h-full shadow-xl  shadow-gray-600  hover:   text-pink-600 mx-auto font-bold">
                            <img className=' py-1 sm:h-50 sm:w-50 ' src="https://www.shaadidukaan.com/vogue/wp-content/uploads/2020/03/muathukralnidhi-dulhan-makeup.jpg" alt="" />
                            <div className="description text-2xl flex justify-center">Bridal makeup</div>
                        </div>
                        <div className="card sm:w-50  w-full mt-10 hover:scale-105 transition duration-500 cursor-pointer  bg-white h-full shadow-xl shadow-gray-600 hover: border-2  text-pink-600 mx-auto font-bold">
                            <img className='px-2 py-1 sm:h-50 sm:w-50 ' src="https://static-bebeautiful-in.unileverservices.com/1200/900/5-natural-homemade-facial-ideas-for-clear-glowing-skin_mobilehome.jpg" alt="" />
                            <div className="description text-2xl flex justify-center ">Facial</div>
                        </div>
                        <div className="card sm:w-50  w-full mt-10 hover:scale-105 transition duration-500 cursor-pointer bg-white h-full shadow-xl shadow-gray-600 hover: border-2  text-pink-600 mx-auto font-bold">
                            <img className='px-2 py-1 sm:h-50 sm:w-50 ' src="https://static-bebeautiful-in.unileverservices.com/salon-treatments-to-get-rid-of-quarantine-hair_1.jpg" alt="" />
                            <div className="description text-2xl flex justify-center ">Hair care</div>
                        </div>
                        <div className="card sm:w-50  w-full mt-10 hover:scale-105 transition duration-500 cursor-pointer bg-white h-full shadow-xl shadow-gray-600 hover: border-2  text-pink-600 mx-auto font-bold">
                            <img className=' py-1 sm:h-50 sm:w-50 ' src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/03/17121355/body_products-01-806x562.png" alt="" />
                            <div className="description text-2xl flex justify-center ">body care</div>
                        </div>
                        <div className="card sm:w-50  w-full mb-20 mt-10 hover:scale-105 transition duration-500 cursor-pointer bg-white h-full shadow-xl shadow-gray-600 hover: border-2  text-pink-600 mx-auto font-bold">
                            <img className=' py-1 sm:h-50 sm:w-50 ' src="https://gumlet.assettype.com/Prabhatkhabar%2F2022-05%2F6961510f-c711-4c99-9394-ef6f8a5ebfb1%2Fmehndi11.jpg?auto=format%2Ccompress&w=400&dpr=2.6" alt="" />
                            <div className="description text-2xl flex justify-center ">Mehandi</div>
                        </div>
                    </div>
                </div>
                <div className="trending mt-8 mx-auto">
                    <div className="content">
                        <div className="heading text-3xl font-bold flex justify-center mx-4">
                            Whats Trending?? Uff teri ada look......
                        </div>
                        <img className='w-[90%] mx-auto my-10 h-full sm:w-[50%] sm:h-[40%] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1DNlDMHeuMZz5GES0sy1gLQ3VB7yoK76YD02iXgYjJLZeXEBwVEveMw1AhjC51JuXrzk&usqp=CAU" alt="" />
                        <div className="description my-3 mx-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolores, quos perferendis nobis laboriosam sapiente a quis accusantium aliquam modi ut repellat eaque, consequuntur aperiam quam odit? Fuga, doloribus saepe.
                        </div>
                        <button className='cursor-pointer mx-4 mt-10 mb-10 bg-pink-700 w-32 h-14 text-white text-xl'>Read More</button>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home