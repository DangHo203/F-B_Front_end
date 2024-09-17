import axios from "axios";

const url = "http://localhost:3000";

export const apiLogin = async (data: any) => {
    const link = `${url}/auth/login`;
    try {
        const rs = await axios.post(link, data);
        return rs;
    } catch (error) {
        return error;
    }
};
