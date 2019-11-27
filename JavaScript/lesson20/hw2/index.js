class User {
    constructor(id, name, sessionId) {
        this.id = `${id}`;
        this.name = `${name}`;
        this.sessionId = `${sessionId}`;
    };
};

class UserRepository extends User {
    constructor(users) {
        this._users = Object.freeze(users);
    };

    getUserNames() {
        return this._users;
    };

    getUserIds() {
        return this._id;
    };

    getUserNameById(userId) {;
    }
};

export { User, UserRepository }