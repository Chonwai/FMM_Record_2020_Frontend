class LocalStorageService {
    constructor() {}
    static setItem(key, value) {
        return localStorage.setItem(key, JSON.stringify(value));
    }
    static getItem(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    static removeItem(key) {
        return localStorage.removeItem(key);
    }
}

export default LocalStorageService;
