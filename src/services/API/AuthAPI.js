import axios from 'axios';

class AuthAPI {
    constructor(domain) {
        this.domain = domain;
    }
    async login(data) {
        let res = await axios.post(this.domain + `/api/v1/user/login`, data);
        return res.data;
    }
}

export default AuthAPI;
