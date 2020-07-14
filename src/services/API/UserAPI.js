import axios from '../AxiosService';

class UserAPI {
    constructor() {
        //
    }
    async login(data) {
        let res = await axios.post('/api/v1/user/profile', data);
        return res;
    }
    async getOwner() {
        let res = await axios.get('/api/v1/user/profile');
        return res;
    }
}

export default UserAPI;
