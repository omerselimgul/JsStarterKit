function addToCart(productName="Elma",quantity) {
    console.log("sepete eklendi : "+ productName + "adet : " + quantity)
}

addToCart("Elma",10)

let sayHello = ()=>{
    console.log("Hello World ")
}
sayHello()

let sayHello2 = function () {
    console.log("Hello world 2")
}

sayHello2()

function addToCart2(productName ,quantity ,unitPrice) {
        
}

addToCart2("armut",2,10)

function addToCart3(product) {
    console.log("Ürün : " + product.productName )
    console.log("Adet : " + product.quantity )     
    console.log("Fiyat : " + product.unitPrice )     

}
let product1 = {productName:"Elma",unitPrice:10,quantity:5}
addToCart3(product1)

// obje array reference type
let product2 = {productName:"Elma",unitPrice:10,quantity:5}
let product3 = {productName:"Elma",unitPrice:10,quantity:5}
product2=product3
product2.productName="Karpuz"
console.log(product3.productName)


function AddToCart4(products) {
    console.log(products)
}


let products =[
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"armut",unitPrice:10,quantity:5},
    {productName:"karpuz",unitPrice:10,quantity:5}
]
AddToCart4(products)
//rest = ...name
function add(...numbers) {
    let total = 0 
    for (let i = 0; i < numbers.length; i++) {
        total=total+numbers[i]
    }
    console.log(total)
}

add(40,50,55,94)

let numbers =[30,50,210,480,451,741,954,554]
console.log(...numbers)
console.log(Math.max(...numbers))
// Array de desracting
let [icanadolu,marmara,karadeniz,[icanadolusehirleri,marmarasehirleri,Karadenizsehirler]] = [
    {name: "ic anadolu ",population:"20M"},
    {name: "marmara ",population:"30M"},
    {name: "karadeniz",population:"10M"},
    [
        ["Ankara","Konya"],
        ["istabul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

console.log(icanadolu)
console.log(icanadolusehirleri)
//objede Desracting

let newProductname,newUnitPrice,NewQuantity
({productName:newProductname,           unitPrice:newUnitPrice,
quantity:NewQuantity}
    ={productName:"Elma",unitPrice:10,quantity:5})

console.log(newProductname)