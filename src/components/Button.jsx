import React from "react";

const Button = ({ variant, onPress, children }) => {
  return (
    <>
      {variant === "primary" && (
        <button
          onClick={onPress}
          className="max-w-fit text-white bg-primary-main hover:bg-primary-dark border-2 border-primary-main hover:border-primary-dark active:bg-pink-700 px-[24px] py-[8px]"
        >
          {children}
        </button>
      )}
      {variant === "secondary" && (
        <button
          onClick={onPress}
          className="text-primary-main hover:text-primary-dark active:text-pink-700 border-2 border-primary-main hover:border-primary-dark active:border-pink-700 px-[24px] py-[8px]"
        >
          {children}
        </button>
      )}
      {variant === "text" && (
        <button
          onClick={onPress}
          className="text-primary-main hover:text-primary-dark active:text-pink-700 px-[24px] py-[8px]"
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
