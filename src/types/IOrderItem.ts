import { ICartItem } from "./ICartItem";

export interface IOrderItem {
    order_id: number;
    delivery_time: string;
    status: string;
    total: number;
    orderItems: ICartItem[];
    shipper_id?: number;
}
