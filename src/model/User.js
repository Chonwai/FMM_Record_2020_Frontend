class User {
    constructor() {
        this.currentUser = null;
    }

    // User Details Getter and Setter
    get user() {
        return this.currentUser;
    }
    set user(user) {
        this.currentUser = user;
    }

    // User Name Getter and Setter
    get name() {
        return this.currentUser.name;
    }
    set name(name) {
        this.currentUser.name = name;
    }
}

export default User;
