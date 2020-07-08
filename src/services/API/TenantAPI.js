import axios from 'axios';
import Utils from '../../utils/Utils';

class TenantAPI {
    constructor(domain) {
        this.domain = domain;
    }
    async getAllTenants(page = 1) {
        let res = await axios.get(this.domain + `/api/v1/tenants/all?page=${page}`);
        return res.data;
    }

    async getSpecifyTenant(data) {
        let res = await axios.get(this.domain + `/api/v1/tenants/${data}`);
        return res.data;
    }

    async getSpecifyTenantBySearchFilter(filter) {
        filter = Utils.generateAPIFilter(filter);
        let res = await axios.get(this.domain + `/api/v1/tenants/search/filter?${filter}`);
        return res.data;
    }

    async insertTenant(data) {
        let res = await axios.post(this.domain + `/api/v1/tenants`, data);
        return res.data;
    }

    async updateTenant(data, id) {
        let res = await axios.put(this.domain + `/api/v1/tenants/${id}/update`, data);
        return res.data;
    }

    async deleteTenant(id) {
        let res = await axios.delete(this.domain + `/api/v1/tenants/${id}`);
        return res.data;
    }
}

export default TenantAPI;
