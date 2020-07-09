import axios from '../AxiosService';

class RecordAPI {
    constructor() {
        //
    }
    async getAllRecords(page = 1) {
        let res = await axios.get(`/api/v1/records/all?page=${page}`);
        return res;
    }

    async getSpecifyRecord(data) {
        let res = await axios.get(`/api/v1/records/${data}`);
        return res;
    }

    async getNonReturnedRecords(page = 1) {
        let res = await axios.get(`/api/v1/analysis/records/filter?is_return=false&page=${page}`);
        return res;
    }

    async getIsReturnedRecords(page = 1) {
        let res = await axios.get(`/api/v1/analysis/records/filter?is_return=true&page=${page}`);
        return res;
    }

    async getAmountOfRecords(data) {
        let res = await axios.get(`/api/v1/analysis/records/amount?count=${data}`);
        return res;
    }

    async insertRecord(data) {
        let res = await axios.post(`/api/v1/records`, data);
        return res;
    }

    async updateRecord(data, id) {
        let res = await axios.put(`/api/v1/records/${id}/update`, data);
        return res;
    }
}

export default RecordAPI;
