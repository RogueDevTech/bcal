"use client";
import React, { useEffect } from "react";
import Aos from "aos";

interface AOSProviderProps {
  children: React.ReactNode;
}

const AOSProvider: React.FC<AOSProviderProps> = ({ children }) => {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
