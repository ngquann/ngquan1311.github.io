## Khai báo biến
>- Sử dụng từ khóa **let**, **const** để khai báo biến

## Sử dụng let
- Khai báo biến: 
> let number;
- Khai báo biến và gán giá trị:
> let age = 24;

## Sử dụng const
Được sử dụng để khai báo hằng số và không thể gán lại 1 giá trị cho biến ấy

> const number = 99

## Quy tắc đặt tên biến
>- Chứa các ký tự chữ, số, _ và $
>- Ký tự đầu tiên không được là **SỐ** (nên là chữ)
>- Có phân biệt chữ in hoa và in thường
>- Không trùng với các từ khóa của Javascript như: for, while, this, ...
>- Nên đặt tên theo kiểu camelCase nếu tên biến có độ dài 2 từ trở lên cho dễ đọc. Ví 
dụ fullname thì sẽ đặt fullName

## Kiểm tra kiểu dữ liệu của biến
>- Để kiểm tra kiểu dữ kiệu của 1 biến, chúng ta sử dụng toán tử **typeof**
>- console.log(typeof X)

## Những kiểu dữ liệu trong JS
>- Number
>- String
>- Undefined
>- Null 
>- NaN
>- Object

## Kiểu dữ liệu String
>- String (chuỗi) là một đoạn text có thể có một hoặc nhiều ký tự.
>- Cho phép truyền biến, biểu thức, giá trị...
>- Các chuỗi đều phải được bao quanh bằng cặp dấu nháy đơn ' hoặc nháy kép ".
>- Trường hợp trong chuỗi cũng có xuất hiện dấu nháy đơn hoặc nháy kép thì phải 
thêm ký tự \ đằng trước dấu nháy đó.
>- Khi bạn muốn Enter xuống hàng một chuỗi thì bắt buộc phải sử dụng dấu + để nối chuỗi

> Ví dụ
> ❖ let name = “Nguyễn Quân”;


## Nối chuỗi trong Javascript
>- Sử dụng dấu + để ghép hai chuỗi (hoặc biến) lại với nhau.

## Template strings – ES6
>- Sử dụng ký tự back-tick `` thay cho ký tự ngoặc đơn hoặc ngoặc kép.
>- Khi khai báo chuỗi kiểu này có thể viết chuỗi trong nhiều dòng và có thể dùng dấu 
ngoặc đơn hoặc ngoặc kép thoải mái mà không cần dùng escape character.
>- Có thể dùng các biến, biểu thức ngay trong chuỗi với cú pháp như sau: 
`string text ${expression} string text`

## Kiểu dữ liệu Number
>- Number (số) là một tập hợp của các con số (0 – 9) không chứa dấu khoảng trắng và có thể chứa dấu trừ (-) nằm ở đầu để đại diện cho số âm.
- Ví dụ:
>- let age = 24
>- let num = -9.9