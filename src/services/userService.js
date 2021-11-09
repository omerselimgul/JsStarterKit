export default class UserService {
    constructor(loggerService) {
        this.users = []
        this.loggerService=loggerService
    }
    add(user) {
        this.users.push(user)
        this.loggerService.log(user)
    }
    List() {
        return this.users
    }
    GetById(id) {
        return this.users.find(u => u.id === id)
    }

}