import axios from '../AxiosService';

class AuthAPI {
    constructor() {
        //
    }
    async login(data) {
        let res = await axios.post('/api/v1/user/login', data);
        return res;
    }
}

export default AuthAPI;
