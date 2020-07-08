import axios from 'axios';

class RecordAPI {
    constructor(domain) {
        this.domain = domain;
    }
    async getAllRecords(page = 1) {
        let res = await axios.get(this.domain + `/api/v1/records/all?page=${page}`);
        return res.data;
    }

    async getSpecifyRecord(data) {
        let res = await axios.get(this.domain + `/api/v1/records/${data}`);
        return res.data;
    }

    async getNonReturnedRecords(page = 1) {
        let res = await axios.get(
            this.domain + `/api/v1/analysis/records/filter?is_return=false&page=${page}`
        );
        return res.data;
    }

    async getIsReturnedRecords(page = 1) {
        let res = await axios.get(
            this.domain + `/api/v1/analysis/records/filter?is_return=true&page=${page}`
        );
        return res.data;
    }

    async getAmountOfRecords(data) {
        let res = await axios.get(this.domain + `/api/v1/analysis/records/amount?count=${data}`);
        return res.data;
    }

    async insertRecord(data) {
        let res = await axios.post(this.domain + `/api/v1/records`, data);
        return res.data;
    }

    async updateRecord(data, id) {
        let res = await axios.put(this.domain + `/api/v1/records/${id}/update`, data);
        return res.data;
    }
}

export default RecordAPI;
