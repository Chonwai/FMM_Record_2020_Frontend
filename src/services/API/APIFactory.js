import AssetAPI from './AssetAPI';
import AuthAPI from './AuthAPI';
import RecordAPI from './RecordAPI';
import TenantAPI from './TenantAPI';
import UserAPI from './UserAPI';

class APIFactory {
    constructor(name) {
        switch (name) {
            case 'asset':
                return new AssetAPI();
            case 'auth':
                return new AuthAPI();
            case 'record':
                return new RecordAPI();
            case 'tenant':
                return new TenantAPI();
            case 'user':
                return new UserAPI();
            default:
                break;
        }
    }
}

export default APIFactory;
