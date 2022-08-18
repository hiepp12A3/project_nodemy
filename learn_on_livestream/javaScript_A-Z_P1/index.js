/**
    TOÁN TỬ

- CƠ BẢN
    + phép cộng, ghép chuỗi
    % phép lấy phần dư
    sự khác biệt giữa - / * % và +
    ++ tăng 1 đơn vị
    -- giảm 1 đơn vị
    ** phép nhân mũ

- SO SÁNH
    < , > , <= , >= , != 
    ==  so sánh về giá trị
    === so sánh về giá trị và kiểu dữ liệu
    !   toán tử phủ định

- LOGIC
    And
    Or
    toán tử 3 ngôi
    True, False và các giá trị tương đương
 */

let number1 = "Hiep dep trai sieu cap" + 1;;
console.log(number1);

//  lỗi NaN
let number2 = "Hiep dep trai sieu cap" - 1;;
console.log(number2);

let number3 = "9" - "1"; // = 8
console.log(number3);

let number4 = "9" + "1"; // = 91
console.log(number4);


////////////////////////////////////////////////////////

// lấy phần dư
let soDu = 10 % 3;
console.log(soDu);

let number5 = 10;
// number += 1;
var number6 = number5++;

console.log(number5); // 11;
console.log(number6); // 10

let number7 = 0;
var ketqua = number7++ + ++number7 + number7++;
// 0         2           2
console.log(ketqua); //  4
console.log(number7); // 3

// Số Mũ
var x = 10 ** 3; // 10^3
console.log(x)


// XỬ LÝ SAU SỐ THỰC
var y = 0.1 + 0.2; // 0.30000000000000004
console.log(y);
// cách xử lý
var yy = (0.1 * 10 + 0.2 * 10) / 10; // 0.3 => nhân với số tròn để đưa về số nguyên
console.log(yy);

//--------------
console.log(5 === "5"); // false - so sánh cả kiểu dữ liệu
console.log(5 == "5"); // true 


////////////////////////////////////////////////////////;