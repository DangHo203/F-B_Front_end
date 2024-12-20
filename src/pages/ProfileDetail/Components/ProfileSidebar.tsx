/**
 * This code was generated by Builder.io.
 */
import React from "react";
import SidebarItem from "./SidebarItem";

interface ProfileSidebarProps {
    sidebar: number;
    setSidebar: (value: number) => void;
    name: string;
    imageUrl: string;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({
    sidebar,
    setSidebar,
    name,
    imageUrl,
}) => {
    const sidebarItems = [
        { label: "Profile", isActive: true, link: "/profile", id: 1 },
        { label: "My Orders", isActive: false, link: "/orders", id: 2 },
    ];
    return (
        <aside className="flex flex-col sm:w-[40%] max-md:ml-0 max-sm:w-full">
            <div className="flex flex-col max-md:mt-10">
                <div className="flex flex-col items-center px-16 pt-8 pb-24 bg-orange-50 max-md:px-5">
                    <div className="flex flex-col max-w-full w-1/3 justify-center items-center  ">
                        <img
                            loading="lazy"
                            src={imageUrl}
                            alt={`Profile picture of ${name}`}
                            className="object-cover w-full h-full rounded-full aspect-square max-md:mr-1.5"
                        />
                        <h2 className="mt-2.5 w-auto text-xl text-slate-700">
                            {name}
                        </h2>
                    </div>
                </div>
                <nav>
                    {sidebarItems.map((item, index) => (
                        <SidebarItem
                            setSidebar={setSidebar}
                            id={item.id}
                            key={index}
                            label={item.label}
                            isActive={sidebar === index+1 ? true : false}
                            link={item.link}
                        />
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default ProfileSidebar;
