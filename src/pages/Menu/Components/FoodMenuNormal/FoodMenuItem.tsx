/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface FoodMenuItemProps {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
}

const FoodMenuItem: React.FC<FoodMenuItemProps> = ({
  title,
  description,
  price,
  imageSrc,
}) => {
  return (
    <article className="py-2.5 pr-2.5 pl-5 bg-orange-50 rounded-3xl shadow-sm max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start self-stretch my-auto text-xl font-bold text-slate-700 max-md:mt-9">
            <h3>{title}</h3>
            <p className="self-stretch mt-4 text-lg">{description}</p>
            <p className="mt-4">{price}</p>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={imageSrc}
            alt={title}
            className="object-contain shrink-0 max-w-full rounded-3xl aspect-square w-[150px] max-md:mt-5"
          />
        </div>
      </div>
    </article>
  );
};

export default FoodMenuItem;
