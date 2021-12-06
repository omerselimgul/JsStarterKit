import { users } from "../data/users.js"
import DataError from "../moduls/dataerror.js"

export default class UserService {
    constructor(loggerService) {
        this.employees=[]
        this.customers=[]
        this.errors=[]
        this.loggerService=loggerService
    }
    load(){
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if(!this.checkCustomerValidityForErrors(user)){
                        this.customers.push(user)
                    }
                    
                    break;
                case "employee":
                    if(!this.checkEmployeeValidityForErrors(user))
                    this.employees.push(user)
                    break;                
            
                default:
                    this.errors.push(new DataError("Wrong user type",user))
                    break;
            }
        }
    }
//formik--yup
    checkCustomerValidityForErrors(user){
        let hasErrors=false
        let requiredFields="id firstname lastname age city".split(" ")
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors=true
                this.errors.push(new DataError(`Validation Problem. ${field} is required`,user))
            }
        }
        return hasErrors
    }
    checkEmployeeValidityForErrors(user){
        let hasErrors=false
        let requiredFields="id firstname lastname age city salary".split(" ")
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors=true
                this.errors.push(new DataError(`Validation Problem. ${field} is required`,user))
            }
        }
        return hasErrors
    }
    
    add(user) {
        //this.users.push(user)
        this.loggerService.log(user)
    }
    List() {
        //return this.users
    }
    GetById(id) {
        //return this.users.find(u => u.id === id)
    }

}