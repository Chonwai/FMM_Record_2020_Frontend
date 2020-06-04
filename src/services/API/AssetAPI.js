import axios from 'axios';

let domain = process.env.VUE_APP_DOMAIN;

class AssetAPI {
    async getAllAssets(page = 1) {
        let res = await axios.get(domain + `/api/v1/assets/all?page=${page}`);
        return res.data;
    }

    async getSpecifyAsset(data) {
        let res = await axios.get(domain + `/api/v1/assets/${data}`);
        return res.data;
    }

    async insertAsset(data) {
        let res = await axios.post(domain + `/api/v1/assets`, data);
        return res.data;
    }

    async updateAsset(data, id) {
        let res = await axios.put(domain + `/api/v1/assets/${id}/update`, data);
        return res.data;
    }
}

export default AssetAPI;
