import User from "./user.js"

export default class Employee extends User{
    constructor(id, firstname, lastname, city,age,salary) {
        super(id,firstname,lastname,city,age)
        this.salary=salary
    }
}