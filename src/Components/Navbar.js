import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlaneDeparture } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";




const Navbar = () => {


    const displayBar = () => {
        const show = document.querySelector('#bar')
        show.classList.remove('left-[-100%]');
        show.classList.add('left-[0%]');
        console.log(show)
    }


    const RemoveBar = () => {
        const show = document.querySelector('#bar')
        show.classList.remove('left-[0%]');
        show.classList.add('left-[-100%]');
        console.log(show)
    }



    return (
        <>
            <div className=' absolute w-full z-30  '>
                <div className=" w-[95%] mx-auto  flex items-center justify-between " >
                    <div className='flex items-center gap-8'>
                        <FaBars className='text-3xl text-gray-200 cursor-pointer' onClick={displayBar} />
                        {/* <img className='w-[200px] h-[90px] ' src={logo} alt="load" /> */}
                        <h1 className='text-3xl text-red-500 font-bold transform hover:scale-125 transition-transform duration-300'>NETFLIX</h1>
                    </div>
                    <div className='flex items-center justify-evenly list-none gap-10 font-bold text-xl text-white h-[80px] '>
                        <li className='transform hover:scale-125 transition-transform duration-300'><Link to="/">Home</Link></li>
                        <li className='transform hover:scale-125 transition-transform duration-300'><Link to="/about">About</Link></li>
                        <li className='transform hover:scale-125 transition-transform duration-300'><Link to="/subscription">Subscription</Link></li>
                        <li className='transform hover:scale-125 transition-transform duration-300'><Link to="/offer">Offer</Link></li>
                        <button className='bg-red-600 rounded-md w-[80px] h-[40px] text-white transform hover:scale-125 transition-transform duration-300'>Login</button>
                        <FaSearch className='text-2xl' />
                    </div>

                </div>
            </div>

            <div id='bar' className='w-[300px] h-[100vh] bg-gray-800 fixed z-50   left-[-100%]'>
                <div className='w-[90%] mx-auto  flex items-center justify-between  gap-[30px]  mt-4  '>
                    <div className='w-[80px] h-[80px] bg-red-400 rounded-md '></div>
                    <h1 className='text-xl'>Piyush</h1>
                    <FaChevronLeft className=' mr-[20px] text-md' onClick={RemoveBar} />

                </div>
                <div className='list-none'>

                    <hr className='mt-4' />
                    <li className='ml-4 mt-4 '>My Download</li>
                    <hr className='mt-4' />
                </div>

                <div className='text-md list-none flex flex-col gap-5 w-[90%] mx-auto mt-4 '>

                    <li>Anime</li>
                    <li>Drama</li>
                    <li>TV Shows</li>
                    <li>Romantic Movies</li>
                    <li>Comedy Movies</li>
                    <li>Action & Sci-fi</li>
                    <li>Documentries</li>
                    <li>Music</li>
                    <li>Hollywood Movies</li>
                    <li>Indipendent Movies</li>
                    <li>Indian Movies</li>
                    <li>Award-Winning-Movies</li>
                    <li>Horror Movies</li>
                </div>
            </div>

        </>
    )
}

export default Navbar



