import AssetAPI from './AssetAPI';
import AuthAPI from './AuthAPI';
import RecordAPI from './RecordAPI';
import TenantAPI from './TenantAPI';

let domain = process.env.VUE_APP_DOMAIN;

class APIFactory {
    constructor(name) {
        switch (name) {
            case 'asset':
                return new AssetAPI(domain);
            case 'auth':
                return new AuthAPI(domain);
            case 'record':
                return new RecordAPI(domain);
            case 'tenant':
                return new TenantAPI(domain);
            default:
                break;
        }
    }
}

export default APIFactory;
