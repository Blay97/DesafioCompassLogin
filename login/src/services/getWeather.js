import AxiosInstance from "./api"

export const getWheater = async ({ position }) => {
    const params = {
        q: position,
    }
    return await AxiosInstance.get('/current.json', {
        params,
    });
};