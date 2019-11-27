class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    };
}

class UserRepository extends User {
    constructor(users) {
        this._users = Object.freeze(users);
    };

    getUserNames() {
        return this._name;
    };

    getUserIds() {
        return this._id;
    };

    getUserNameById(userId) {
        if (this._id == userId[id]) return userId[name];
    }
}

export { User, UserRepository }