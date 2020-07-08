import axios from 'axios';

class AssetAPI {
    constructor(domain) {
        this.domain = domain;
    }
    async getAllAssets(page = 1) {
        let res = await axios.get(this.domain + `/api/v1/assets/all?page=${page}`);
        return res.data;
    }

    async getSpecifyAsset(data) {
        let res = await axios.get(this.domain + `/api/v1/assets/${data}`);
        return res.data;
    }

    async insertAsset(data) {
        let res = await axios.post(this.domain + `/api/v1/assets`, data);
        return res.data;
    }

    async updateAsset(data, id) {
        let res = await axios.put(this.domain + `/api/v1/assets/${id}/update`, data);
        return res.data;
    }

    async deleteAsset(id) {
        let res = await axios.delete(this.domain + `/api/v1/assets/${id}`);
        return res.data;
    }
}

export default AssetAPI;
