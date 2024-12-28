import React, { useState } from "react";

interface MyButtonProps {
  text: string;
}

const MyButton: React.FC<MyButtonProps> = ({ text }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ${
        isActive ? "bg-green-500" : ""
      }`}
    >
      {text}
    </button>
  );
};

export default MyButton;
