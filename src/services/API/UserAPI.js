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
        let res = await axios.get('/api/v1/user/owner');
        return res;
    }
    async update(data) {
        let res = await axios.put('/api/v1/mutation/user/owner', data);
        return res;
    }
}

export default UserAPI;
