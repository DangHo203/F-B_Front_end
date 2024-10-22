import axios from "../../axios";

export const GetOrderByIdAPI = async (id: number) => {
    return await axios({
        method: "GET",
        url: "/order/id",
        params: { user_id: id },
    });
};

export const GetOrderByIdOrderAPI = async (id: number) => {
    return await axios({
        method: "GET",
        url: "/order/id_order",
        params: { order_id: id },
    });
}

export const GetOrderItemsAPI = async (id: number) => {
    return await axios({
        method: "GET",
        url: "/order/items",
        params: { order_id: id },
    });
};

export const getShipperByIdAPI = async (id: number) => {
    return await axios({
        method: "GET",
        url: `/user/shipper`,
        params: {
            user_id: id,
        },
    });
};

export const changeStatusOrderAPI = async (params: any) => {
    return await axios({
        method: "PUT",
        url: "/order/status",
        params: params //order_id, status, user_id, delivery_time
    })
}

export const cancelOrderAPI = async (params: any) => {
    return await axios({
        method: "PUT",
        url: "/order/cancel",
        params: params // {order_id: 1, message}
    })
}
