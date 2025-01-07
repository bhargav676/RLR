import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PiArrowFatRightLight } from "react-icons/pi";

const Buy = () => {
    const location = useLocation();
    const [productData, setProductData] = useState(null);
    const [increase,setIncrease]=useState(1);
    const [gram, setGram] = useState(0);
    const [isPaymentPopupVisible, setPaymentPopupVisible] = useState(false);
    
    const navigate = useNavigate();
    const dec = () => {
        setIncrease((prev) => {
            const newIncrease = Math.max(prev - 1, 1); // Ensure it doesn't go below 1
            setGram(newIncrease * productData.productPrice); // Update gram based on new quantity
            return newIncrease;
        });
    };
    
    const inc = () => {
        setIncrease((prev) => {
            const newIncrease = prev + 1; // Increment the quantity
            setGram(newIncrease * productData.productPrice); // Update gram based on new quantity
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

    const handleBuyNowClick = () => {
        setPaymentPopupVisible(true);
    };

    const handleClosePaymentPopup = () => {
        setPaymentPopupVisible(false);
    };

    if (!productData) {
        return <div>Loading...</div>; // Show loading until data is available
    }

    return (
        <div className='flex flex-col lg:flex-row lg:gap-10 lg:ml-20 lg:mt-9 p-4'>
            <img src={productData.imagePath} alt="Selected Product" className="w-full lg:w-2/5 lg:h-2/5 lg:ml-0 lg:mt-4 rounded-md shadow-md" />
            <div className='mt-4 lg:mt-10 lg:ml-10 flex-1'>
                <h1 className='text-2xl lg:text-3xl font-bold font-[ui-sans-serif] mb-2'>
                    {productData.productName} 
                </h1>
                <h1 className='text-lg lg:text-xl text-gray-600 mb-4'>
                    Rs {productData.productPrice} {/* Corrected to productPrice */}
                </h1>

                <div className='flex items-center gap-3 mb-4'>
                    <div className='bg-green-500 w-3 h-3 rounded-full animate-pulse'></div>
                    <p className='text-lg lg:text-xl font-medium text-gray-700'>Item in stock</p>
                </div>

                <div className='flex items-center gap-3 mb-6'>
                    <PiArrowFatRightLight className='text-lg lg:text-xl text-teal-600' />
                    <p className='text-lg lg:text-xl text-teal-600 font-semibold'>Free shipping on orders above 500/-</p>
                </div>

                <p className='mt-4 text-lg lg:text-xl font-semibold'>Quantity</p>
                <div className='flex gap-4 lg:gap-6 mt-5'>
                    <button className='bg-[#4A4A4A] w-full lg:w-28 h-12 lg:h-14 rounded-lg text-white text-sm lg:text-base hover:bg-gray-700 transition-transform transform hover:scale-105' onClick={dec}>-</button>
                    <p className='mt-3 font-semibold'>{increase}</p>
                    <button className='bg-[#4A4A4A] w-full lg:w-28 h-12 lg:h-14 rounded-lg text-white text-sm lg:text-base hover:bg-gray-700 transition-transform transform hover:scale-105' onClick={inc}>+</button>
                </div>

                <p className='mt-6 text-lg lg:text-xl font-semibold'>Total price</p>
                <button className='bg-[#4A4A4A] w-full lg:w-80 h-12 lg:h-14 mt-7 rounded-lg text-white text-sm lg:text-base font-semibold hover:bg-gray-700 transition-transform transform hover:scale-105 shadow-md'>
                    Rs {gram}
                </button>

                <div className='flex flex-row xs:flex-row sm:flex-row md:flex-row gap-4 lg:gap-5 mt-5'>
                    <button className='bg-[rgba(36,174,241,255)] w-full xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-80 h-12 lg:h-14 rounded-lg text-white text-sm lg:text-base font-semibold hover:opacity-90 transition-transform transform hover:scale-105 shadow-md' onClick={handleCartClick}>Add to Cart</button>
                    <button className='bg-[rgba(36,174,241,255)] w-full xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-80 h-12 lg:h-14 rounded-lg text-white text-sm lg:text-base font-semibold hover:opacity-90 transition-transform transform hover:scale-105 shadow-md' onClick={handleBuyNowClick}>Buy it Now</button>
                </div>

                <p className='mt-6 text-sm lg:text-base text-gray-600'>{productData.productDesc}</p>
                <p className='mt-6 text-sm lg:text-base text-gray-600'>
                    {productData.productdesc} </p>
            </div>

            {isPaymentPopupVisible && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl max-w-md relative">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={handleClosePaymentPopup}
                        >
                            ✕
                        </button>
                       
                    </div>
                </div>
            )}
        </div>
    );
};

export default Buy;
