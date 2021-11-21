## Function (hàm)
 Tập hợp các đoạn code để thực thi một tác vụ nào đó.
 - Cú pháp để định nghĩa:

> function functionName(para_1, …, para_n) {
>
> \\\function code
>
>  }

- Thực thi function:
> functionName(para_1, …, para_n)

- Lưu ý:
> - Không thực thi khi định nghĩa.
> - Sẽ thực thi khi được gọi.
> - Có thể nhận 1 tham số hoặc nhiều tham số.
> - Có thể trả về 1 giá trị.

### Function default values – ES6
Thêm tham số mặc định để tránh trường hợp quên truyền giá trị khi gọi hàm.

### Phạm vi của biến (scope)
Scope: được định nghĩa là một vòng đời của một variable, từ khi nó sinh ra và chết 
đi.
- Có 3 loại scope:
    > **Global scope**: 1 biến được khai báo bên ngoài function.
    >
    > **Function scope**: 1 biến được khai báo bên trong function và chỉ được sử dụng bên trong function được khai báo.
    >
    > **Block scope**: Phạm vi trong 1 cặp dấu {}
- Lưu ý:
> Khi 1 biến được khai báo trong function mà không có từ khóa khai báo biến thì nó sẽ trở thành 1 biến Global.

## Kiểu dữ liệu Boolean
Giá trị của kiểu dữ liệu này chỉ có thể là true hoặc false.

Để xác định giá trị boolean cho biến, biểu thức,… ta sử dụng hàm Boolean()
>- Truthy value là những giá trị mà khi ép kiểu về Boolean thì sẽ cho ra giá trị là 
true. 
>- Ngược lại, Falsy value là những giá trị mà khi ép kiểu về Boolean thì cho ra giá trị 
là false
- Note:
>- Có 6 giá trị sau được coi là falsy : false, 0, NaN, ‘’, null, undefined
>- Các giá trị còn lại, ngoài các giá trị trên được gọi là truthy

## Câu lệnh điểu kiện If, Else
Cú pháp:
> if (điều kiện) {
>    
>  //  Khối lệnh thực thi khi điều kiện đúng
>
> } else {
>
>   //  Khối lệnh thực thi khi điều kiện đúng
>
>}
- Nếu điều kiện đúng thực hiện câu lệnh trong if, ngược lại nếu điều kiện sai thì hiện 
câu lệnh trong else.

**Câu lệnh if/else if/else**
>
Chỉ định một điều kiện mới nếu điều kiện đầu tiên là sai.
> if (điều kiện 1) {
>    
>  //  Khối lệnh thực thi khi điều kiện đúng
>
> } else if (điều kiện 2){
>
>   //  Khối lệnh thực thi khi điều kiện 1 sa và điều kiện 2 đúng
>
>} else {
>
> // Khối lệnh thực thi khi điều kiện 1 và điều kiện 2 sai
>}