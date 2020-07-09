import axios from 'axios';
import LocalStorageUtils from '../utils/LocalStorageUtils';
import LocalStorageService from '../services/Storage/LocalStorageService';
import Router from '../router';
import { Message } from 'element-ui';

const axiosService = axios.create({
    baseURL: process.env.VUE_APP_DOMAIN,
    timeout: 15000,
});

axiosService.interceptors.request.use(
    request => {
        if (LocalStorageUtils.hasToken()) {
            request.headers['Authorization'] = `Bearer ${LocalStorageService.getItem('token')}`;
        }
        return request;
    },
    function (error) {
        return Promise.reject(error.response);
    }
);

axiosService.interceptors.response.use(
    response => {
        return response.data;
    },
    function (error) {
        if (error.response.status && error.response.status == 401) {
            LocalStorageService.removeItem('token');
            LocalStorageService.removeItem('user_id');
            Router.push({ name: 'Login' });
            Message.error('請登錄到現有帳戶！');
        }
        // return Promise.reject(error);
    }
);

export default axiosService;
