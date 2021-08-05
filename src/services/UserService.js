import AppService from './AppService';

class UserService extends AppService {

    constructor() {
        super();
        this.path = this.getPath('users');
    }
    read(id) {
        return this.http.get(`${this.path}/${id}`);
    }
}

export default UserService;
