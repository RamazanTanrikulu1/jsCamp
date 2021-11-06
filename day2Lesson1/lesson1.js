/**************ASAL SAYILAR**************/
/* const isPrime = num => {
    if (num < 2) {
        return false
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
function primeNumber(...numbers) {
    numbers.forEach(number => {
        console.log(isPrime(number) ? `${number} sayı asal.` : `${number} sayı asal değil.`)
    })
    return true
}
primeNumber(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20) */

/**************ARKADAŞ SAYILAR**************/
/* function friendNumbers(number1, number2) {
    let sum1 = 0
    let sum2 = 0

    for (let i = 0; i < number1; i++) {
        if (number1 % i == 0) 
            sum1 += i
        }
        for (let j = 0; j < number2; j++) {
            if (number2 % j == 0) 
                sum2+=j
        }
        if (number1 === sum2 && number2 === sum1) {
            console.log("Arkadaş sayıdır")
        } else {
            console.log("Arkadaş sayı değildir")
        }
}
friendNumbers(220, 284) */

/**************MÜKEMMEL SAYILAR**************/
/* function perfectNumbers() {
    for (let sayi = 1; sayi <= 1000; sayi++) {
        let toplam = 0
        for (let i = 1; i < sayi; i++) {
            if (sayi % i == 0)
                toplam += i
        }
        if (toplam == sayi)
            console.log(sayi + " Mükemmel sayıdır")
    }
}
perfectNumbers() */

/**************1000'e kadarki tüm asal sayılar**************/
const isPrime = num => {
    if (num < 2) {
        return false
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
function primeNumber(...numbers) {
    numbers.forEach(number => {
        console.log(isPrime(number) ? `${number} sayı asal.` : `${number} sayı asal değil.`)
    })
    return true
}
const primeNumberList=()=>{
    for(let i=0 ; i<=1000;i++){
        if(isPrime(i))
        console.log(i)
    }
}
primeNumberList()


