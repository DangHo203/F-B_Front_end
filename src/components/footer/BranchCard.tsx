/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface BranchCardProps {
  name: string;
  address: string;
  hours: string;
  phone: string;
}

const BranchCard: React.FC<BranchCardProps> = ({
  name,
  address,
  hours,
  phone,
}) => {
  return (
    <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full font-bold text-orange-50 max-md:mt-10">
        <h2 className="self-center text-4xl">{name}</h2>
        <p className="mt-3.5 text-xl">{address}</p>
        <div className="flex gap-4 mt-3.5 text-xs max-md:mr-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f27aeb73562d377596ac0648a7c774a9fe13d068e204a1e1bd12de498dc0ac9?placeholderIfAbsent=true&apiKey=e0522cabc7bc4885906fcb2658eca109"
            className="object-contain shrink-0 w-5 aspect-square fill-orange-50"
            alt=""
          />
          <span className="grow shrink my-auto w-[104px]">{hours}</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b80303eb52b2f47cdaf6b751833edcb6f6603e18a4f5fd76a37f0c4512dda8ad?placeholderIfAbsent=true&apiKey=e0522cabc7bc4885906fcb2658eca109"
            className="object-contain shrink-0 w-5 aspect-square fill-orange-50"
            alt=""
          />
          <span className="grow shrink w-[106px]">{phone}</span>
        </div>
        <button className="self-center mt-3.5 text-lg text-green-400">
          Click to View Google Map
        </button>
      </div>
    </article>
  );
};

export default BranchCard;
