// Bài 1
function mark(number) {
    if (number >= 85) {
        console.log('A')
    } else if (70 <= number < 85) {
        console.log('B')
    } else if (40 <= number < 70) {
        console.log('C')
    } else {
        console.log('D')
    }
}

mark(90)

// Bài 2
function number(a, b) {
    let number = (a, b)
    console.log(Math.max(number))
}

number(6,9)

// Bài 3
function number1(a) {
    if (a < 0) {
        console.log("Số âm")
    } else if (a > 0) {
        console.log("Số dương")
    } else {
        console.log("Số 0")
    }
}

number1(6)

// Bài 4
function number2 (a) {
    if (a % 2 ==0) {
        console.log("Số chẵn")
    } else {
        console.log("Số lẻ")
    }
}
number2(23)

// Bài 5
function number3(a) {
    if (a % 15 == 0) {
        console.log("Chia hết cho cả 3 và 5")
    } else {
        console.log("Không chia hết cho cả 3 và 5")
    }
}
number3(14)

// Bài 6
function number4(a,b,c) {
    if (c == a + b) {
        console.log(true)  
    } else {
        console.log(false) 
    }
}

number4(1,2,4)