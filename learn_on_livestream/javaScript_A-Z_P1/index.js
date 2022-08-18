// CÁC LỆNH CĂN BẢN


// kiểu 1
if (5 > 4) {
    //vao day
} else {
    // false vao day
}

// kiểu 2
if (5 > 4) {

}

// kiểu 3
if (5 < 4) {
    //dung thi vao day
} else if (5 > 4) {

}

// kiểu 4
if (5 > 4) {
    if (5 < 4) {
        if (5 == 4) {

        }
    }
}

////////////////////////////////////////////////////////
for (var x = 0; x < 10; x++) {
    console.log(x)
}

console.log("-----------")

var arr1 = [1, 2, 3, 4, 5];

for (var i = 0; i < 10; i++) {
    console.log(arr1[i]);
}

console.log("-----------")

for (var giatri in arr1) {
    console.log(giatri)
}

console.log("-----------")


var myObject = {
    name: 'hiep',
    age: 24
}
for (var key in myObject) {
    console.log(key)
}

console.log("------while-- break---")

while (true) {
    console.log('lap');
    break;
}

console.log("------while--continue---")

var arr2 = [1, 2, 3, 4, 5];

for (var i = 0; i < 10; i++) {
    if (arr2[i] == 3) {
        continue;
    };
    console.log(arr1[i]);
}

console.log("------switch--case-----")

var y = 2;
switch (y) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;

    case 3:
        console.log(3);
        break;

    case 4:
        console.log(4);
        break;

    case 5:
        console.log(5);
        break;

    default:
        console.log('mac dinh')
}