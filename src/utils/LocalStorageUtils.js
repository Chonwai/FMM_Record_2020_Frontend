class LocalStorageUtils {
    static hasToken() {
        return window.localStorage.getItem('token') !== null;
    }
}

export default LocalStorageUtils;
