/**
 * This code was generated by Builder.io.
 */
import React from "react";
import BranchCard from "./BranchCard";

interface BranchInfo {
    name: string;
    address: string;
    hours: string;
    phone: string;
}

const branchData: BranchInfo[] = [
    {
        name: "Robert Food",
        address: "1986 Hilltop DriveBorger, TX 79007",
        hours: "7.30 AM - 9.30 PM",
        phone: "+880 1630-225015",
    },
    {
        name: "Mark A. Reed Food",
        address: "4877 Rose AvenueNew Orleans, LA 70112",
        hours: "7.30 AM - 9.30 PM",
        phone: "+880 1630-225015",
    },
    {
        name: "Karie K. Hill Food",
        address: "1509 Peaceful LaneCleveland, OH 44115",
        hours: "7.30 AM - 9.30 PM",
        phone: "+880 1630-225015",
    },
];

const Footer: React.FC = () => {
    return (
        <main className="flex flex-col w-full  mt-[30px]">
            <h1 className="self-center text-4xl font-bold text-slate-700">
                Our Branch
            </h1>
            <section className="flex flex-col items-center px-16 pt-9 pb-4 mt-9 bg-red-600 max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
                <div className="ml-4 w-full max-w-[1143px] max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        {branchData.map((branch, index) => (
                            <BranchCard key={index} {...branch} />
                        ))}
                    </div>
                </div>
            </section>
            <footer className="px-16 py-10 w-full text-xl font-bold text-orange-50 bg-slate-700 max-md:px-5 max-md:max-w-full">
                Copyright © 2022 | Shaheen Uddin Ahmad
            </footer>
        </main>
    );
};

export default Footer;
