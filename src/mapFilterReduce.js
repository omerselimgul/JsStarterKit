let cart = [
    {id:1 , productNAme:"Telefon",quantity:3,unitPrice:4000},
    {id:2 , productNAme:"Bardak",quantity:2,unitPrice:30},
    {id:3 , productNAme:"Kalem",quantity:1,unitPrice:20},
    {id:4 , productNAme:"Sarj Cihazi",quantity:2,unitPrice:100},
    {id:5 , productNAme:"Kitap",quantity:3,unitPrice:30},
    {id:6 , productNAme:"Pot",quantity:5,unitPrice:150},   
]

// react vue ile oluşturulan sayfalara SPA denir

//Map Function
console.log("<ul>")
cart.map(product=>{
    console.log("<li> "+product.productNAme+ " : "+product.unitPrice*product.quantity+" </li>")
})
console.log("</ul>")

//reduce Function
let total=cart.reduce((acc,product)=>acc+product.unitPrice*product.quantity,0)

console.log(total)

//Filter Function
let quantityOver2 =cart.filter(product=>product.quantity>2)

console.log(quantityOver2)



function addToCart(sepet) {
    sepet.push({id:7 , productNAme:"Ruhsat",quantity:1,unitPrice:20})
}
addToCart(cart)
// console.log(cart)

let sayi =10 

function SayiTopla(number) {
    number+=1
}
// console.log(SayiTopla(sayi))
SayiTopla(sayi)
// console.log(sayi)