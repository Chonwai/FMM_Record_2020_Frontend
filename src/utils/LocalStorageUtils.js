class LocalStorageUtils {
    static hasToken() {
        return window.localStorage.getItem('Token') !== null;
    }
}

export default LocalStorageUtils;
