import axios from 'axios';

let domain = process.env.VUE_APP_DOMAIN;

class RecordAPI {
    async getAllRecords(page = 1) {
        let res = await axios.get(domain + `/api/v1/records/all?page=${page}`);
        return res.data;
    }

    async getSpecifyRecord(data) {
        let res = await axios.get(domain + `/api/v1/records/${data}`);
        return res.data;
    }

    async insertRecord(data) {
        let res = await axios.post(domain + `/api/v1/records`, data);
        return res.data;
    }

    async updateRecord(data, id) {
        let res = await axios.put(domain + `/api/v1/records/${id}`, data);
        return res.data;
    }
}

export default RecordAPI;
