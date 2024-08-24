import React from "react";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  [key: string]: any;  // Menggunakan index signature untuk menangani properti tambahan
}

const Button: React.FC<ButtonProps> = ({ className = '', onClick, type = 'button', children, ...rest }) => {
  return (
    <button 
      className={`btn ${className}`} 
      onClick={onClick} 
      type={type} 
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;