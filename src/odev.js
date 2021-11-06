//1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )  
function findPrime(...numbers) {

    for (let i = 0; i < numbers.length; i++) {
        let sayi=0
        let prime = true
        if (numbers[i]<2) {
            console.log("En küçük asal sayı 2 dir")
        }
        else{
            for (let j = 2; j < numbers[i]; j++) {
                if (numbers[i] % j== 0) {
                    prime = false
                    sayi=j
                    break
                }
            }
            if (prime) {
                console.log(numbers[i] + " Asal")
            }
            else{
                console.log(numbers[i] + " Asal Değil" + " "+ j + " Bölünüyor")
                
            }
        }
    }
}

// findPrime(1739)

//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)

function isFriendlyNumber(number1,number2) {
    let totalFactorNumber1=0
    let totalFactorNumber2=0
        for (let i = 1; i < number1; i++) {
            if (number1 % i == 0) {
                totalFactorNumber1 = totalFactorNumber1 + i
            }
        }
        for (let j = 0; j < number2; j++) {
            if (number2 % j == 0) {
                totalFactorNumber2 = totalFactorNumber2 + j
            }
        }
        if (totalFactorNumber1==number2 && totalFactorNumber2==number1) {
            console.log("bu sayılar kardeş sayılardır")
        }
        else {
            console.log(number1 + " Ve " + number2 + " Arkadaş sayı değildir")
        }
}
        
// isFriendlyNumber(284,220)

//3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.


function isPerfectNumber() {
    let number=1000
    for (let i = 1; i < number; i++) {
    let total=0
        for (let j = 1; j < i; j++) {
            if (i%j==0) {
                total=total+j
            }
            
        }
        if (total==i) {
            console.log(i + " Perfect Number")
        }
    }
}
// isPerfectNumber()

function primeNumbers() {
    for (let i = 2; i <= 1000; i++) {
    let bool=true
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                bool=false
            }
        }
        if (bool) {
            console.log(i)
        }
    }
}
// primeNumbers()