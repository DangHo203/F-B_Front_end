import axios from "../../axios";

export const CreateOrder = async (order: any) => {
    return await axios({
        method: "POST",
        url: "/order",
        params: order,
    })
}
export const AddOrderItem = async (orderItem: any) => {
    return await axios({
        method: "POST",
        url: "/order/items",
        params: orderItem,
    })
}