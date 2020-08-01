class User {
    constructor() {
        this.currentUser = null;
    }

    // User Details Getter and Setter
    get user() {
        return this.currentUser;
    }
    set user(newUser) {
        this.currentUser = newUser;
    }

    // User Name Getter and Setter
    get name() {
        return this.currentUser.name;
    }
    set name(newName) {
        this.currentUser.name = newName;
    }
}

export default User;
