"use client";
import { useState, useContext } from 'react';
import { MdLightMode, MdNightlight } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';
import MyContext from '../store/MyContext';

const Navbar = ({ cryptos }) => {
    

    // Getting the global dark mode state from context store
    const { darkMode, setDarkMode } = useContext(MyContext);

    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <div className='container mx-auto bg-white dark:bg-black shadow-md fixed z-999'>
            <div className='flex justify-between items-center px-16 py-7'>
                <p className='text-black font-bold dark:text-white text-2xl'>Crypto<span className='text-green-300'>Nest</span></p>
                <div>
                    <form className='flex' onSubmit>
                        <input
                            type="text"
                            placeholder='Enter Crypto Name'
                            className="p-2 rounded-l-md md:w-[600px] bg-gray-100 border-solid border-1 border-black outline-1 outline-green-300 cursor-pointer hidden md:flex"
                        />
                        <button type="submit" className="bg-green-300 text-white p-2 rounded-r-md"> Search</button>
                    </form>
                </div>

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-md bg-gray-300 dark:bg-gray-200 hidden md:flex"
                >
                    {darkMode ? <MdLightMode size={24} /> : <MdNightlight size={24} />}
                </button>

                <div className="md:hidden cursor-pointer z-1000" onClick={toggleNav}>
                    {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </div>
            </div>

            <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-transform transform ${navOpen ? 'translate-x-0' : 'translate-x-full'} z-[9998]`}>
                <FaTimes size={24} className="cursor-pointer" onClick={toggleNav} />
                <div>
                    <input placeholder='Search' className="p-2 rounded-md md:w-[600px] bg-gray-100 border-solid border-1 border-black outline-1 outline-green-300 w-full" />
                </div>

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-md bg-gray-200 dark:bg-black"
                >
                    {darkMode ? <MdLightMode size={24} /> : <MdNightlight size={24} />}
                </button>
            </div>

            
        </div>
    );
};

export default Navbar;
