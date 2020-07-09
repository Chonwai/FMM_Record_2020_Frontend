import axios from '../AxiosService';

class AssetAPI {
    constructor() {
        //
    }
    async getAllAssets(page = 1) {
        let res = await axios.get(`/api/v1/assets/all?page=${page}`);
        return res;
    }

    async getSpecifyAsset(data) {
        let res = await axios.get(`/api/v1/assets/${data}`);
        return res;
    }

    async insertAsset(data) {
        let res = await axios.post(`/api/v1/assets`, data);
        return res;
    }

    async updateAsset(data, id) {
        let res = await axios.put(`/api/v1/assets/${id}/update`, data);
        return res;
    }

    async deleteAsset(id) {
        let res = await axios.delete(`/api/v1/assets/${id}`);
        return res;
    }
}

export default AssetAPI;
