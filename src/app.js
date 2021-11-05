console.log("Merhaba Dünya") 

// var dolardun =9.20
// dolardun="Adana"
// var dolarbugun=9.30
// console.log(dolardun)

let dolarbugun=9.30
let dolardun=9.20

    {
        dolardun=9.10
    }
console.log(dolardun)

const eurodun=11.2

// eurodun=11 bu hata bu yapılmıyor only read 

console.log(eurodun)

// camelCasing isimlendirme 
// PascalCasing isimlendirme 
let konutKerdiler = ["Konut kredisi ","Emlak Kredisi" , "Kamu konut kredisi","Özel konut kredisi"]


// console.log(konutKerdiler)

console.log("<ul>")
for(let i = 0; i<konutKerdiler.length;i++){
    console.log("<li>"+konutKerdiler[i] + "</li>")
}
console.log("</ul>")