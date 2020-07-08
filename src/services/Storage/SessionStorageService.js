class SessionStorageService {
    constructor() {}
    static setItem(key, value) {
        return sessionStorage.setItem(key, JSON.stringify(value));
    }
    static getItem(key) {
        return sessionStorage.getItem(key);
    }
    static removeItem(key) {
        return sessionStorage.removeItem(key);
    }
}

export default SessionStorageService;
