class User {
    constructor() {
        this.currentUser = null;
    }
    get user() {
        return this.currentUser;
    }
    set user(user) {
        this.currentUser = user;
    }
}

export default User;
