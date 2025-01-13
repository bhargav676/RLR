import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PiArrowFatRightLight } from "react-icons/pi";
import { MdLocalShipping, MdOutlineVerified } from "react-icons/md";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Buy = () => {
    const location = useLocation();
    const [productData, setProductData] = useState(null);
    const [increase, setIncrease] = useState(1);
    const [gram, setGram] = useState(0);

    const navigate = useNavigate();

    const dec = () => {
        setIncrease((prev) => {
            const newIncrease = Math.max(prev - 1, 1);
            setGram(newIncrease * productData.productPrice);
            return newIncrease;
        });
    };

    const inc = () => {
        setIncrease((prev) => {
            const newIncrease = prev + 1;
            setGram(newIncrease * productData.productPrice);
            return newIncrease;
        });
    };

    useEffect(() => {
        if (location.state) {
            setProductData(location.state);
            setGram(location.state.productPrice);
        }
    }, [location.state]);

    const handleCartClick = () => {
        navigate('/cart', {
            state: {
                imagePath: productData.imagePath,
                productname: productData.productName,
                productprice: productData.productPrice,
            },
        });
    };

    if (!productData) {
        return <div className="flex justify-center items-center h-screen text-gray-700">Loading...</div>;
    }

    return (
        <div className="container mx-auto px-6 py-10">
     
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
     
                <div className="relative">
                    <img
                        src={productData.imagePath}
                        alt="Selected Product"
                        className="w-full rounded-lg transition-transform duration-300 hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-teal-500 text-white text-sm px-3 py-1 rounded-full">
                        Best Seller
                    </span>
                </div>
                <div className="mt-8 lg:mt-16 space-y-6">
                    <h1 className="text-4xl font-bold text-gray-800">{productData.productName}</h1>
                    <div className="flex items-center space-x-2">
                        <div className="flex text-yellow-500">
                            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
                        </div>
                    </div>
                    <h2 className="text-2xl font-semibold text-teal-600">
                        Rs {productData.productPrice}
                    </h2>
                    <p className="text-gray-700">
                        Premium quality product crafted to perfection, ensuring durability and reliability. 
                        Get yours today and enjoy exclusive benefits.
                    </p>

                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <PiArrowFatRightLight className="text-teal-500 text-lg" />
                            <p className="text-sm text-gray-700">Free shipping on orders above 1000/-</p>
                        </div><br/>
                        <div className="flex items-center space-x-2">
                            <MdOutlineVerified className="text-green-500 text-lg" />
                            <p className="text-sm text-gray-700">Certified product with quality assurance</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-lg font-semibold text-gray-800">Quantity</p>
                        <div className="flex items-center mt-2 space-x-4">
                            <button
                                className="w-10 h-10 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                                onClick={dec}
                            >
                                -
                            </button>
                            <p className="text-lg font-medium">{increase}</p>
                            <button
                                className="w-10 h-10 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                                onClick={inc}
                            >
                                +
                            </button>
                            
                        </div>
                    </div>
                    <div>
                        <p className="text-lg font-semibold text-gray-800">Total Price</p>
                        <div className="text-2xl font-bold text-teal-600 mt-2">Rs {gram}</div>
                    </div>
                    <button
                        className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition"
                        onClick={handleCartClick}
                    >
                        Add to Cart
                    </button>
                    <p className="text-sm text-gray-700">{productData.productdesc}</p>
                </div>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-4">
                    <MdLocalShipping className="text-teal-500 text-3xl" />
                    <p className="text-gray-700">Fast and secure delivery.</p>
                </div>
                <div className="flex items-center space-x-4">
                    <MdOutlineVerified className="text-green-500 text-3xl" />
                    <p className="text-gray-700">100% quality guarantee.</p>
                </div>
                <div className="flex items-center space-x-4">
                    <PiArrowFatRightLight className="text-blue-500 text-3xl" />
                    <p className="text-gray-700">Exclusive offers for members.</p>
                </div>
            </div>
        </div>
    );
};

export default Buy;
