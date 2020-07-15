class LocalStorageUtils {
    static hasToken() {
        return window.localStorage.getItem('token') !== null;
    }
    static hasUserID() {
        return window.localStorage.getItem('user_id') !== null;
    }
}

export default LocalStorageUtils;
