import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { LampContainer } from "./lamp";

export function LampDemo() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 4000);
    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-white bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center font-medium tracking-tight text-transparent sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl text-4xl"
      >
        RLR <br />
      </motion.h1>
    </LampContainer>
  );
}
