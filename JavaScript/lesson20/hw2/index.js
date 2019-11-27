class User {
    constructor(id, name, sessionId) {
        this._id = `${id}`;
        this._name = `${name}`;
        this._sessionId = `${sessionId}`;
    };
};

class UserRepository {
    constructor(arr) {
        this._users = Object.freeze(arr);
    };

    getUserNames() {
        return this._users.map(i => i._name);
    };

    getUserIds() {
        return this._users.map(i => i._id);
    };

    getUserNameById(userId) {
        let filterById = this._users
            .filter(i => i._id === `${userId}`);
        return filterById[0]._name;
    };
};

export { User, UserRepository };