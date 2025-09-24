import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ to, onClick, children, variant = 'primary', className = '' }) => {
  const baseClasses = 'inline-block text-center text-sm font-semibold rounded-lg px-6 py-3 transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  const variantClasses = {
    primary: 'transform bg-[#001eff] text-white border-b-4 border-[#001299] hover:bg-[#1a36ff] hover:-translate-y-0.5 active:translate-y-0.5 active:border-b-2 focus-visible:ring-[#001eff]',
    secondary: 'bg-white text-[#111] border border-[#EAEAEA] hover:bg-[#EFEFEF] hover:border-gray-300 transform active:scale-95 focus-visible:ring-gray-800',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;
