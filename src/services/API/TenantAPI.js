import axios from 'axios';

let domain = process.env.VUE_APP_DOMAIN;

class TenantAPI {
    async getAllTenants(page = 1) {
        let res = await axios.get(domain + `/api/v1/tenants/all?page=${page}`);
        return res.data;
    }

    async getSpecifyTenant(data) {
        let res = await axios.get(domain + `/api/v1/tenants/${data}`);
        return res.data;
    }

    async insertTenant(data) {
        let res = await axios.post(domain + `/api/v1/tenants`, data);
        return res.data;
    }

    async updateTenant(data, id) {
        let res = await axios.put(domain + `/api/v1/tenants/${id}/update`, data);
        return res.data;
    }

    async deleteTenant(id) {
        let res = await axios.delete(domain + `/api/v1/tenants/${id}`);
        return res.data;
    }
}

export default TenantAPI;