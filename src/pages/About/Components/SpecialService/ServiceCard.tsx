/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-center max-md:mt-10">
        <h3 className="self-center text-4xl font-bold text-red-600">{title}</h3>
        <p className="mt-5 text-lg text-slate-700">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
