import { apiGetProfile } from "./profile.service";

export const GetProfileById = async (id: number) => {
    try {
        const rs = await apiGetProfile(id);
        return rs?.data.data[0];
    } catch (error) {
        throw error;
    }
};
