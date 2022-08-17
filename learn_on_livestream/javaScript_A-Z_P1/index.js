/**
KIỂU BIẾN - KIỂU DŨ LIỆU

    undedined
    null
    String
    Number
    Object => giá trị chung 
    Array
    Boolean
 */

// TRUY XUẤT KIỂU OBJECT

var person = {
    name: 'hiepdeptrai',
    address: 'ha noi',
    teacher: {
        name: 'anh dan'
    },
    key: 'abc'
};
// các kiểu truy xuất
console.log(person);
console.log(person.name)
console.log(person['teacher'])

// truy xuất bằng vòng for(),
for (var key in person) {
    console.log(key);
}

var listPerson = [
    { name: 'Hiep' },
    { name: 'Hòa' }
];
console.log(listPerson)


// TRUY XUẤT KIỂU ARRAY
var listNumber = [1, 2, 3, 4, 5];
// lấy p.tử đầu tiên
console.log(listNumber[0]);
// lấy tổng sô phần tử
console.log(listNumber.length);
// lấy p.tử cuối
console.log([listNumber.length - 1])

// BOOLEAN
var isDeveloper = false;


// CÓ 3 CÁCH KHAI BÁO BIẾN

let number1 = 999;
// const là hằng số - khi đã khai báo ko thể sửa lại
const number2 = 10;
console.log(number1);