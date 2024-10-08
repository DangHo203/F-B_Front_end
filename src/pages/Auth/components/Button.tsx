/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="px-7 py-4 mt-4 text-white bg-red-600 rounded-xl max-md:px-5">
      {children}
    </button>
  );
};

export default Button;
