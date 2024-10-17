import { IOrderItem } from "../../../types/IOrderItem";
import { MdDoubleArrow } from "react-icons/md";
import FormatCurrency from '../../../utils/common/FormatCurrency';

interface OrderItemProps {
    items: IOrderItem;
}
const OrderItem: React.FC<OrderItemProps> = ({ items }) => {
    console.log(items);
    return (
        <div className="w-full h-auto gap-5 flex flex-col items-center justify-normal p-5 rounded-[10px] border ">
            <div className="w-full h-1/3 flex flex-row items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-700">
                    Order ID: {items.order_id}
                </h2>
                <h2 className="text-lg font-semibold text-slate-700">
                    {items.delivery_time}
                </h2>
                <h2 className="text-lg font-semibold text-slate-700">
                    {items.status}
                </h2>
            </div>
            <div className="w-full h-2/3 flex flex-col gap-5">
                {items.orderItems.map((item, index) => (
                    <div
                        key={index}
                        className="w-full h-auto flex flex-row items-center justify-between"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-[100px] h-[100px] object-cover"
                        />
                        <h2 className="text-lg font-semibold text-slate-700">
                            {item.title}
                        </h2>
                        <h2 className="text-lg font-semibold text-slate-700">
                            Price: {FormatCurrency(item.price)}
                        </h2>
                        <h2 className="text-lg font-semibold text-slate-700">
                            X {item.quantity}
                        </h2>
                    </div>
                ))}
                <div className="flex flex-row justify-between items-center">
                    <h2 className="text-lg font-semibold text-slate-700">
                        <span className="text-red-400 font-semibold text-[20px]">Total:</span> {FormatCurrency(items.total)}
                    </h2>
                    <div className=" animate-shake flex flex-row items-center gap-2 text-red-500 hover:text-red-400 cursor-pointer ">
                        Reorder now <MdDoubleArrow />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default OrderItem;
