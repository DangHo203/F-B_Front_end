import axios from "axios";

const url = "http://localhost:3000";

export const apiRegister = async (data: any) => {
    const link = `${url}/auth/register`;
    try {
        const rs = await axios.post(link, data);
        return rs;
    } catch (error) {
        return error;
    }
};
export const sendEmail = async (data: any) => {
    const link = `${url}/auth/request-otp`;
    try {
        const rs = await axios.post(link, data);
        return rs;
    } catch (error) {
        return error;
    }
};
export const verifyEmail = async (data: any) => {
    const link = `${url}/auth/verify-otp`;
    try {
        const rs = await axios.post(link, data);
        return rs;
    } catch (error) {
        return error;
    }
};
