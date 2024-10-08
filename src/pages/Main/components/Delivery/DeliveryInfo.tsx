/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface DeliveryInfoProps {
  phoneNumber: string;
}

const DeliveryInfo: React.FC<DeliveryInfoProps> = ({ phoneNumber }) => {
  return (
    <div className="flex flex-1 gap-2.5 my-auto text-slate-700">
      <div className="flex flex-col">
        <h3 className="text-xl font-bold">Delivery Order</h3>
        <p className="z-10 text-base">{phoneNumber}</p>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa7a00446cf452cebab86c688e9f263c37b3e0e795c7b103c54095f9de29a909?placeholderIfAbsent=true&apiKey=e0522cabc7bc4885906fcb2658eca109"
        alt="Phone icon"
        className="object-contain shrink-0 self-start aspect-square w-[35px]"
      />
    </div>
  );
};

export default DeliveryInfo;
