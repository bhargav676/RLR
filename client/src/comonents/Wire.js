import React from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { RiStarSFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import arduino from "../images/arduino.png";
import joystick from '../images/joystick.png';
import relay from '../images/relay.png';
import battery from '../images/battery.png';
import rfid from '../images/rfid.png';
import mq2 from '../images/mq2.png';
import rasp from '../images/Rain.png';
import esp from '../images/esp32.png';

const GoogleGeminiEffectDemo = () => {
  const navigate = useNavigate();

  const products = [
      { id: 1, name: "Arduino", price: 1000, url: arduino ,description:"Arduino"},
      { id: 2, name: "Joystick", price: 1000, url: joystick },
      { id: 3, name: "Relay", price: 1000, url: relay},
      { id: 4, name: "Battery", price: 1000, url: battery},
      { id: 5, name: "RFID", price: 1000, url: rfid },
      { id: 6, name: "Mq2", price: 1000, url: mq2 },
      { id: 7, name: "Esp32", price: 1000, url: esp},
      { id: 8, name: "Rain sensor", price: 1000, url: rasp},
  ];

  const handleAddToCart = (product) => {
    navigate("/cart", {
      state: {
        imagePath: product.url,
        productname: product.name,
        productprice: product.price,
      },
    });
  };
  const handleAddTobuy=(product)=>{
    navigate("/buy", {
        state: {
          imagePath: product.url,
          productName: product.name,
          productPrice: product.price,
          productdesc: product.description
        },
      });
  }

  return (
    <div>
      <center>
        <p className="mt-10 font-bold text-4xl lg:text-7xl md:text-5xl sm:text-4xl text-[#333333]">
          Components
        </p><br/>
        <p className="text-gray-400 lg:text-lg">Here some of our premium quality products</p>
        <br />
      </center>
    
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:p-10">
        {products.length > 0 ? (
          products.map((product, index) => (
            product && product.url ? (
              <div key={index} className="relative rounded-xl">
                {/* Product Card */}
                <img
                  src={product.url}
                  alt={product.name}
                  onClick={() => handleAddTobuy(product)}
                  className="w-full h-72 object-cover rounded-md"
                />
                <div className="absolute bottom-28 right-4 bg-white p-2 rounded-full shadow-lg ">
                  <CiShoppingBasket className="w-8 h-8 text-gray-700" onClick={() => handleAddToCart(product)} />
                </div>
                
                <h3 className="text-base font-bold font-sans text-white mt-2 ml-2">
                  {product.name}
                </h3>
                <div className="">
                  <p className="text-base ml-3 font-sans font-semibold">{product.name}</p>
                  <p className="text-sm text-gray-400 ml-3">Rs.{product.price}</p>
                </div>
                <div className="flex ml-2 text-yellow-400">
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
          <p className="text-white">No products available</p>
        )}
      </div>
    </div>
  );
};

export default GoogleGeminiEffectDemo;
