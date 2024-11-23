import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Particles from 'react-tsparticles';
import Confetti from 'react-confetti';

const EnhancedRLRAnimation = () => {
  const [showText, setShowText] = useState(false);
  const [countdown, setCountdown] = useState(4); // Countdown for redirection
  const [hovered, setHovered] = useState(false); // For button hover animation
  // Background music toggle
  const [showConfetti, setShowConfetti] = useState(false); // Confetti trigger
  const navigate = useNavigate();

  useEffect(() => {
    // Show text after 0.5 seconds
    const textTimeout = setTimeout(() => setShowText(true), 500);

    // Start the countdown for redirection
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Redirect to another page after 4 seconds
    const redirectTimeout = setTimeout(() => {
      navigate('/login'); // Replace with your route
    }, 4000);

    // Cleanup timers
    return () => {
      clearTimeout(textTimeout);
      clearInterval(countdownInterval);
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <div className="h-screen w-full relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Confetti Effect */}
      {showConfetti && <Confetti recycle={false} numberOfPieces={150} />}

      {/* Particles Effect */}
      <Particles
        className="absolute inset-0"
        options={{
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 100 },
            size: { value: 3 },
            move: { enable: true, speed: 2 },
            line_linked: { enable: true, distance: 150 },
            color: { value: "#ffffff" }, // White particles for a minimalist effect
          },
        }}
      />

      <div className="h-full flex flex-col justify-center items-center relative">
    

        {/* Animated Text */}
        <div
          className={`flex justify-center gap-3 ${!showText ? 'hidden' : ''}`}
        >
          {/* First "R" */}
          <p
            className="text-9xl font-mono font-extrabold text-white animate-bounce hover:animate-spin"
            title="Resilience"
          >
            R
          </p>

          {/* "L" with glow */}
          <p
            className="text-9xl font-mono font-extrabold text-[#4b94ff] animate-bounce glow hover:animate-pulse"
            title="Leadership"
          >
            L
          </p>

          {/* Second "R" */}
          <p
            className="text-9xl font-mono font-extrabold text-white animate-bounce hover:animate-wiggle"
            title="Responsibility"
          >
            R
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-1/5 mt-10">
          <div className="h-1 bg-gray-600 rounded-full">
            <div
              className="h-full bg-blue-500"
              style={{ width: `${(4 - countdown) * 25}%` }} // Dynamically adjusting the width
            ></div>
          </div>
        </div>

        {/* Interactive Buttons */}
        <div className="mt-12 flex gap-5">
          <button
            onClick={() => {
              setShowConfetti(true);
              setTimeout(() => navigate('/login'), 500); // Add delay for confetti effect
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg transition-all transform ${
              hovered ? 'scale-110 shadow-xl' : 'scale-100'
            }`}
          >
            Skip Animation
          </button>

         
        </div>

        {/* Hover Effect */}
        <p className="mt-5 text-lg text-white font-light text-center transition-all hover:text-[#4b94ff]">
          Click to skip the animation!
        </p>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-5 w-full text-center text-white">
        <p>✨ Built with React | TailwindCSS | Particles.js ✨</p>
        <div className="flex justify-center gap-4 mt-2">
          {/* Social Media Links */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-2xl text-white hover:text-blue-400 transition-all"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-2xl text-white hover:text-gray-400 transition-all"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-2xl text-white hover:text-blue-500 transition-all"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default EnhancedRLRAnimation;
