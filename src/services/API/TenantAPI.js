import axios from '../AxiosService';
import Utils from '../../utils/Utils';

class TenantAPI {
    constructor() {
        //
    }
    async getAllTenants(page = 1) {
        let res = await axios.get(`/api/v1/tenants/all?page=${page}`);
        return res;
    }

    async getSpecifyTenant(data) {
        let res = await axios.get(`/api/v1/tenants/${data}`);
        return res;
    }

    async getSpecifyTenantBySearchFilter(filter) {
        filter = Utils.generateAPIFilter(filter);
        let res = await axios.get(`/api/v1/tenants/search/filter?${filter}`);
        return res;
    }

    async insertTenant(data) {
        let res = await axios.post(`/api/v1/tenants`, data);
        return res;
    }

    async updateTenant(data, id) {
        let res = await axios.put(`/api/v1/tenants/${id}/update`, data);
        return res;
    }

    async deleteTenant(id) {
        let res = await axios.delete(`/api/v1/tenants/${id}`);
        return res;
    }
}

export default TenantAPI;
