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
      { id: 1, name: "Arduino Uno R3 Board ", price: 510, url: arduino ,description:"The Arduino Uno R3 is a widely used microcontroller board based on the ATmega328P. It is perfect for beginners and professionals working on IoT, robotics, and automation projects. With 14 digital I/O pins, 6 analog inputs, and built-in USB connectivity, it offers flexibility for various applications. It supports programming through the Arduino IDE and is compatible with a vast range of sensors, modules, and shields.\n\nSpecifications:\n\nMicrocontroller: ATmega328P\nOperating Voltage: 5V\nInput Voltage (recommended): 7V - 12V\nDigital I/O Pins: 14 (6 PWM outputs)\nAnalog Input Pins: 6\nFlash Memory: 32KB (with 0.5KB for bootloader)\nSRAM: 2KB\nEEPROM: 1KB\nClock Speed: 16MHz\nUSB Interface: Type-B\nDimensions: 68.6mm x 53.4mm\nApplications: Robotics, automation, IoT, sensor interfacing"},
      { id: 2, name: "Dual Axis Joystick", price: 60, url: joystick,description:"The Joystick Module is a compact, easy-to-use component designed for Arduino, Raspberry Pi, and other microcontrollers. It enables intuitive control for robotics and gaming projects. The module has two potentiometers (for X and Y axes) and a push button for versatile inputs, making it ideal for projects like remote-controlled vehicles, robotic arms, and DIY game controllers.\n\nSpecifications:\n\nOperating Voltage: 3.3V - 5V\nAnalog Outputs: X-axis and Y-axis\nDigital Output: Push-button switch\nDimensions: 40mm x 26mm x 32mm\nCompatible with Arduino, ESP32, Raspberry Pi, and other microcontrollers\nApplications: RC cars, gaming controllers, robotic control systems" },
      { id: 3, name: "5 Relay Module", price: 70, url: relay,description:"The single-channel relay module is an ideal solution for controlling high-voltage devices with low-voltage microcontrollers. It allows switching of AC or DC loads, making it perfect for home automation, lighting control, and industrial projects. This module is compatible with Arduino, ESP32, and Raspberry Pi, offering reliable isolation and safe operation.\n\nSpecifications:\n\nOperating Voltage: 5V\nRelay Type: Single-channel SPDT\nControl Signal: Low-level trigger\nMaximum Load:\nAC: 250V at 10A\nDC: 30V at 10A\nDimensions: 50mm x 26mm x 19mm\nApplications: Home automation, industrial automation, lighting systems"},
      { id: 4, name: "Lithium-ion Battery", price: 70, url: battery,description:"This rechargeable Li-ion battery is a high-capacity, reliable power source for a wide range of projects, from IoT devices to robotics. With a capacity of 2600 mAh and 3.7V nominal voltage, it ensures long-lasting performance and stable output. Perfect for powering microcontrollers, motors, and other electronic components.\n\nSpecifications:\n\nNominal Voltage: 3.7V\nCapacity: 2600 mAh\nChemistry: Lithium-ion\nRechargeable: Yes\nDimensions: 18mm x 65mm (standard 18650 size)\nApplications: IoT projects, robotics, portable devices, power banks"},
      { id: 5, name: "RFID Scanner with Tags", price: 130, url: rfid,description:"The MFRC522 RFID Scanner Module is a high-frequency (13.56MHz) RFID reader and writer that allows contactless communication with RFID cards and tags. It is widely used in access control systems, attendance tracking, and automation projects. The module supports SPI, I2C, and UART interfaces, making it compatible with Arduino, ESP32, Raspberry Pi, and other microcontrollers.\n\nSpecifications:\n\nOperating Voltage: 3.3V (can be used with 5V logic level microcontrollers with proper level shifting)\nOperating Frequency: 13.56 MHz\nCommunication Interfaces: SPI, I2C, UART\nRead Range: 3 - 5 cm (depending on tag type and environment)\nCompatible Cards: MIFARE 1K, 4K, Ultralight, and other ISO 14443A standard cards\nDimensions: 60mm x 39mm\nIncludes: MFRC522 module, RFID key fob, RFID card, and header pins\nApplications: Attendance systems, access control, electronic payments, inventory management"},
      { id: 6, name: "Mq2", price: 200, url: mq2,description:"The MQ-2 Gas Sensor is a versatile module used to detect combustible gases like LPG, propane, methane, hydrogen, and smoke. It provides both analog and digital outputs, making it compatible with microcontrollers like Arduino, ESP32, and Raspberry Pi for gas leak detection and air quality monitoring.\n\nSpecifications:\n\nperating Voltage: 5V\nDetectable Gases: LPG, Propane, Methane, Hydrogen, CO, Alcohol, Smoke\nDetection Range: 300 - 10,000 ppm\nOutput:\nAnalog Output (proportional to gas concentration)\nDigital Output (threshold-based, adjustable via potentiometer)\nPreheat Time: ~20 seconds\nOperating Temperature: -10°C to 50°C\nDimensions: ~32mm x 20mm\npplications: Gas leak detection, air quality monitoring, fire detection systems"},
      { id: 7, name: "ESP32 DEV Module", price: 550, url: esp,description:"The ESP32 is a versatile microcontroller with built-in Wi-Fi and Bluetooth, designed for IoT and automation projects. With dual-core processing power, extensive GPIOs, and compatibility with Arduino IDE and MicroPython, this board is ideal for beginners and experts alike. Perfect for building smart devices, wearables, robotics, and more, the ESP32 offers excellent performance at an affordable price.\n\nSpecifications:\n\n\n\nProcessor: Dual-core Xtensa® 32-bit LX6\nClock Speed: Up to 240 MHz\nWi-Fi Standard: IEEE 802.11 b/g/n\nBluetooth: v4.2 BR/EDR and BLE\nOperating Voltage: 3.3V\nGPIO Pins: 38\nFlash Memory: 4MB"},
      { id: 8, name: "Rain sensor", price: 100, url: rasp,description:"The Rain Sensor Module (with I2C) is an advanced water detection module designed to detect rain or water presence using an I2C interface. This module provides precise readings of moisture levels and can be used for weather monitoring, smart irrigation systems, and outdoor automation projects.\n\nSpecifications:\n\n\nOperating Voltage: 3.3V - 5V\nInterface: I2C (for easy integration with microcontrollers)\nDetection Range: Wet/Dry status and analog moisture level\nPCB Material: Corrosion-resistant FR4 for long-term outdoor use\nOutput: Digital signal (high/low) and analog moisture level\nAdjustable Sensitivity: Yes (via onboard potentiometer)\nDimensions: Varies based on module type\nApplications: Smart irrigation, weather monitoring, rain detection, outdoor automation"},
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
