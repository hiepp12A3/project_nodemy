// FUNCTION

/*
    Function  tenham(tham số 1, tham số 2) {logic và return}
    Function vô danh
    Function tự chạy (self invokle)
    Higher order function và curry
    Lưu ý:
        function phải có return để trả về kết quả ra ngoài
        function không có return sẽ trả về undifned
        function viết 1 lần để tái sử dụng về sau
*/
// function cong(number1, number2) {
//     return function() {
//         console.log("hế luu")
//     }
// }

// var x = cong(1, 8);

// x()

////////////////////////////////////////////////////////

// function vô danh 
//  () ở cuối là gọi luôn function
// (function(number1, number2) {
//     console.log("hiep dep trai sieu cap")
//     return 9
// })()

////////////////////////////////////////////////////////

function caocap1() {
    return function() {

        return function() {

        }
    }
}
caocap1()()() // curry

// function caocap2(f1) {
//     f1() return 9
// }