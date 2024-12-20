/**
 * This code was generated by Builder.io.
 */
import React from "react";
import FormatCurrency from "../../../../utils/common/FormatCurrency";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

interface FoodMenuItemProps {
    item_id?: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

const FoodMenuItem: React.FC<FoodMenuItemProps> = ({
    title,
    description,
    price,
    image,
    item_id,
}) => {
    const navigate = useNavigate();
    return (
        <article
            onClick={() => {
                navigate(`/menu?id=${item_id}`);
                window.scrollTo(0, 0);
            }}
            className="py-2.5 pr-2.5 pl-5 bg-orange-50 rounded-3xl shadow-sm max-md:max-w-full transform transition-transform duration-300 hover:scale-105"
        >
            <Tooltip title="Click for more detail" placement="right">
                <div className="flex gap-5 max-md:flex-col cursor-pointer">
                    <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col items-start self-stretch my-auto text-xl font-bold text-slate-700 max-md:mt-9">
                            <h3>{title}</h3>
                            <p className="self-stretch mt-4 font-light">
                                {description}
                            </p>
                            <p className="mt-4 text-red-500">
                                From <span>{FormatCurrency(price)}</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            src={image}
                            alt={title}
                            className="object-contain shrink-0 max-w-full rounded-3xl aspect-square w-[150px] max-md:mt-5"
                        />
                    </div>
                </div>
            </Tooltip>
        </article>
    );
};

export default FoodMenuItem;
