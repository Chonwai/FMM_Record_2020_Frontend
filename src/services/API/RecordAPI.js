import axios from 'axios';

let domain = process.env.VUE_APP_DOMAIN;

class RecordAPI {
    async getAllRecords(page = 1) {
        let data = await axios.get(domain + `/api/v1/records/all?page=${page}`);
        return data.data;
    }

    async insertRecord(data) {
        let res = await axios.post(domain + `/api/v1/records`, data);
        return res.data;
    }
}

export default RecordAPI;