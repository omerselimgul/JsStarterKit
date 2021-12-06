import { BaseLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../moduls/user.js"
import UserService from "../services/userService.js"

console.log("User Compenent Yüklendi")

let logger1=new BaseLogger()

let userService=new UserService(logger1)

let user1=new User(1,"Selim","Gul","Maras")
let user2=new User(2,"Engin","demirog","Antalya")

userService.add(user1)
userService.add(user2)

console.log(userService.List())

console.log(userService.GetById(1))



let customer={id:1,firstname:"Selim"}
//Prototyping
customer.lastname ="Gul"
// console.log(customer)

console.log("-------------------------")
userService.load();
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)