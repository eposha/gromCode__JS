class User {
    constructor(id, name, sessionId) {
        this._id = `${id}`;
        this._name = `${name}`;
        this._sessionId = `${sessionId}`;
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