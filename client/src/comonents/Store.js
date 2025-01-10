import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  CiShoppingBasket } from "react-icons/ci";
import { RiStarSFill } from "react-icons/ri";
import {Link} from 'react-router-dom'
const Store = () => {
    const [components, setComponents] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchMain = async () => {
            try {
                const response = await axios.get('https://rlr-component-server.vercel.app/components');
                setComponents(response.data);
            } catch (err) {
                console.error('Error occurred in the image fetch:', err);
            }
        };
        fetchMain();
    }, []);

    const filteredComponents = components.filter((data) => 
        data.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-sans font-bold text-[#333333] text-center mt-6 mb-10">All Products</h1>

            {/* Search Bar */}
            <div className="mb-4 flex justify-center">
                <input
                    type="text"
                    placeholder="Search Products"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-800"
                />
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:p-10">
                {filteredComponents.length > 0 ? (
                    filteredComponents.map((data, index) => (
                        data && data.url ? (
                            <div>
                            <div key={index} className="relative  rounded-xl ">
                                {/* Image */}
                                <Link 
                                    to="/buy"
                                    state={{
                                        imagePath: data.url,
                                        productName: data.name,
                                        productPrice: data.price,
                                        productdesc: data.description
                                    }}
                                >
                                <img
                                    src={data.url}
                                    alt={data.name}
                                    className="w-full h-72 object-cover rounded-md "
                                /></Link>
                                <Link 
                                    to="/cart"
                                    state={{
                                        imagePath: data.url,
                                        productname: data.name,
                                        productprice: data.price,
                                    }}
                                >
                                <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg">
                                    <CiShoppingBasket  className="w-8 h-8 text-gray-700" />
                                </div></Link>

                              

                                
                            </div>
                              {/* Product Name */}
                              <h3 className="text-base font-bold  font-sans text-black  ml-2">{data.name}</h3>
                            {/* Price and Grams */}
                            <div className="flex space-x-2">
                                    <p className="text-base text-gray-700 ml-2">Rs.{data.price}</p>
                                    
                                </div>
                                <div className='flex ml-2 text-yellow-400'>
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                                    </div>
                            </div>
                        ) : null
                    ))
                ) : (
                    <p>No products available</p>
                )}
                
            </div>
        </div>
    );
};

export default Store;
