import React, { useContext, useEffect, useState } from 'react';
import { store } from '../App';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoPerson } from "react-icons/go";
import { CiSearch, CiShoppingBasket } from "react-icons/ci";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../images/logo.png';
import sale from '../images/hero.jpg'
const Main = () => {
    const navigate = useNavigate();
    const [token] = useContext(store);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        if (!token) {
            navigate('/login');
        } else {
            axios
                .get('https://rlrserver.vercel.app/profile', { headers: { 'x-token': token } })
                .then((res) => {
                    setData(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error('Error fetching profile data:', err);
                    setData({ error: 'Unable to fetch profile data' });
                    setLoading(false);
                });
        }
    }, [token, navigate]);

    const handleSearch = () => {
        console.log('Search query:', searchQuery);
       
    };

    if (!token) return null;
    if (loading) 
    console.log(data, handleSearch)
    
    return (
        <div>


            <div className="bg-white shadow-lg lg:bg-cover lg:bg-center lg:h-screen bg-cover bg-center "
                style={{ backgroundImage: `url(${sale})` }}>
                <div className="flex items-center justify-around bg-black opacity-75 h-20 fixed top-0 left-0 right-0 z-50">
                    {/* Logo Section */}
                    <div className="flex items-center gap-1">
                        <img src={logo} alt="Logo" className="w-14 h-14 md:w-16 md:h-16" />
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <p className="transition-all cursor-pointer hover:scale-110 font-semibold text-white">Home</p>
                        <p className="transition-all cursor-pointer hover:scale-110 font-semibold text-white">Shop</p>
                        <p className="transition-all cursor-pointer hover:scale-110 font-semibold text-white">About</p>
                        <p className="transition-all cursor-pointer hover:scale-110 font-semibold text-white">Contact</p>
                    </div>
                    <div className="flex items-center gap-4 relative w-64 sm:w-64 md:w-80 lg:w-80 xl:w-1/4 ml-3">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search..."
                            className="w-full px-5 py-2 pr-10 rounded-full bg-black text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[black] shadow-md transition-all"
                        />
                        <CiSearch
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#ffffff] w-6 h-10"
                            aria-label="Search Icon"
                        />
                    </div>

                    
                    <div className="hidden md:flex items-center gap-6">
                        <GoPerson className="text-[white] text-2xl cursor-pointer hover:scale-110 transition-all h-10" aria-label="User Profile" />
                        <CiShoppingBasket className="text-[#ffffff] text-2xl cursor-pointer hover:scale-110 transition-all h-10" aria-label="Cart" />
                    </div>

                  
                    <div className="md:hidden text-2xl cursor-pointer text-white" onClick={toggleMenu}>
                        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </div>
                </div>

                
                <div
                    className={`md:hidden absolute top-[83px] right-0 w-52 bg-black text-white opacity-75 shadow-lg rounded-lg transition-all z-50 ${menuOpen ? 'block' : 'hidden'}`}
                    style={{ boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
                >
                    <div className="flex flex-col items-center py-4">
                        <p className="py-2 transition-all cursor-pointer">Home</p>
                        <p className="py-2 transition-all cursor-pointer">Shop</p>
                        <p className="py-2 transition-all cursor-pointer">About</p>
                        <p className="py-2 transition-all cursor-pointer">Contact</p>
                        <div className="flex gap-6 mt-4">
                            <CiShoppingBasket className="text-[#ffffff] text-2xl cursor-pointer hover:scale-110 transition-all" aria-label="Cart" />
                        </div>
                    </div>
                </div>

                <div className="pt-24"> 
                    <p className='text-white font-semibold font-mono lg:text-3xl lg:mt-40 md:ml-20 md:text-3xl md:mt-40 sm:ml-16 sm:text-2xl sm:mt-40 xlg:text-3xl xlg:mt-40 xlg:ml-28 text-xl mt-20  ml-5 opacity-100'>TRUSTED ELECTRONICS TO MAKE</p><br/>
                    <p className='text-white lg,md,sm:font-semibold font-bold font-mono lg:text-5xl  md:ml-20 md:text-5xl  sm:ml-16 sm:text-4xl  xlg:text-3xl  xlg:ml-28 text-[27px]   ml-5 opacity-100'>YOUR PROJECTS BRILLIANT</p>
                </div><br/>
                <button
                    className='bg-[rgba(36,174,241,255)] mt-10 ml-36 mb-8 sm:ml-0 md:ml-10 lg:ml-20 xl:ml-20 md:mt-3 sm:mt-3 xl:mt-3 lg:mt-3 w-28 h-10 rounded-full text-white font-semibold sm:w-24 sm:h-8 md:w-28 md:h-10 lg:w-32 lg:h-12 xl:w-32 xl:h-12'
                >
                    Shop now
                </button>
            </div>
              
            <div>
                <center>
               <p className='mt-10 font-bold text-4xl lg:text-7xl md:text-5xl sm:4xl text-[#333333]'>Dynamic Projects</p><br/>
               <p className='text-gray-400 lg:text-lg'>Explore our collection of innovative electronics projects ranging from beginner-friendly Arduino </p>
               <p className='text-gray-400 lg:text-lg'>  setups to more advanced hardware designs</p>
               </center>
            </div>
        </div>
    );
};

export default Main;