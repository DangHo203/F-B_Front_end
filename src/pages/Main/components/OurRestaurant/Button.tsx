/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ text, variant }) => {
  const baseClasses =
    "flex gap-5 px-3 py-1.5 mt-5 ml-8 text-xl rounded-3xl max-md:ml-2.5";
  const variantClasses =
    variant === "primary"
      ? "text-orange-200 bg-red-600"
      : "bg-orange-200 text-red-600";

  return (
    <button className={`${baseClasses} ${variantClasses}`}>
      {text}
      <img
        loading="lazy"
        src={
          variant === "primary"
            ? "https://cdn.builder.io/api/v1/image/assets/TEMP/3bec797056dd9e836bde81f58176c95a9fc92eaa13a89e5558cc1513b1587e76?placeholderIfAbsent=true&apiKey=e0522cabc7bc4885906fcb2658eca109"
            : "https://cdn.builder.io/api/v1/image/assets/TEMP/f47600f9ceb2634cb87975184e0a45e55896f86347d1ccd62cfde0adca4a6ce7?placeholderIfAbsent=true&apiKey=e0522cabc7bc4885906fcb2658eca109"
        }
        alt=""
        className="object-contain shrink-0 my-auto w-5 aspect-square"
      />
    </button>
  );
};

export default Button;