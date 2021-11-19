console.log("every body")

let number 
console.log(number)
// sẽ ra KIỂU DỮ LIỆU là undefined - không xác định
number = 10
console.log(number)
// sẽ ra KIỂU DỮ LIỆU là number - số

let email = "anhquannguyen1311@gmail.com"
console.log(email)

const pi = 3.14
console.log(pi);
// const dùng cho giá trị bất biến không thể thay đổi giá trị


let firstName = "Nguyễn";
let lastName = "Quân";
let fullName = firstName + " " + lastName
console.log(fullName)

let message = "\"Hôm nay\" trời mưa";
console.log(message)

// Template String
// cho phép truyền biến, biểu thức, giá trị...
let message1 = `"Hà Nội" hôm nay bụi`
console.log(message1);

let year = 1990;
let text = `Xin chào ${fullName}. Năm nay ${2021 - year} tuổi`;
console.log(text);

let num1 = 40;
let num2 = 36;
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)
console.log(num1 ** num2)

console.log(Math.ceil(9.24))
console.log(Math.floor(2.87))
console.log(Math.random())

// Kết hợp chuỗi và số
console.log("" + 1 + 0)
console.log("" - 1 + 0)
console.log(true + false)
console.log(4 + 5 + "px")
console.log("$" + 4 + 5)
console.log("4px" - 2)
console.log(7/0)
console.log("-9" + 5)
console.log("-9" - 5)
console.log(typeof("9") + 1)



let a = 1;
let b = 22;
let naame = "John";
alert(`${naame + a}`)
