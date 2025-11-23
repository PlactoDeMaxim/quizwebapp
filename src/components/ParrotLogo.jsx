import React from 'react';

export default function ParrotLogo({ className = "w-8 h-8", ...props }) {
  return (
    <svg 
      width="64" 
      height="64" 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Parrot body */}
      <path d="M32 20C28 20 24 22 22 26C20 30 20 36 22 40C24 44 28 46 32 46C36 46 40 44 42 40C44 36 44 30 42 26C40 22 36 20 32 20Z" fill="#10B981"/>
      {/* Parrot head */}
      <circle cx="28" cy="28" r="6" fill="#059669"/>
      {/* Parrot beak */}
      <path d="M24 30L20 32L24 34Z" fill="#F59E0B"/>
      {/* Parrot eye */}
      <circle cx="26" cy="27" r="2" fill="white"/>
      <circle cx="26" cy="27" r="1" fill="black"/>
      {/* Parrot wing */}
      <path d="M36 32C38 30 40 28 42 30C44 32 42 34 40 36C38 38 36 36 36 34Z" fill="#34D399"/>
      {/* Parrot tail */}
      <path d="M38 44C40 46 42 48 40 50C38 52 36 50 36 48C36 46 36 44 38 44Z" fill="#059669"/>
      {/* Parrot claw */}
      <path d="M30 48L28 52M32 48L30 52M34 48L32 52" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

