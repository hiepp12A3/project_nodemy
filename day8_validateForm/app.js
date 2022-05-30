var usernames = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPasword = document.querySelector('#confirmpasword');
var form = document.querySelector('form');


// hiển thị lỗi
function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.add('error');
    small.innerHTML = message;
}

// check thành công
function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.remove('error');
    small.innerHTML = '';
}

// check không được để trống
function checkEmptyError(listInput) {
    let isEmptyError = false;

    listInput.forEach(input => {
        input.value = input.value.trim();

        if (!input.value) {
            isEmptyError = true;
            showError(input, 'Khong duoc de trong');
        } else {
            showSuccess(input);
        }
    });
    return isEmptyError;
}

// check định dạng email 
function checkEmailError(input) {
    const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    input.value = input.value.trim();
    let isEmailError = !regexEmail.test(input.value);

    if (regexEmail.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, 'Email invalid');
    }

    return isEmailError;
}

//  check ký tự
function checkLengthError(input, min, max) {
    input.value = input.value.trim();

    if (input.value.length < min) {
        showError(input, `Phai co it nhat ${min} ky tu`);
        return true;
    }

    if (input.value.length > max) {
        showError(input, `Khong duoc qua ${max} ky tu`);
        return true;
    }
    return false;
}

function checkMatchPasswordError(passwordInput, cfPasswordInput) {
    if (passwordInput.value !== cfPasswordInput.value) {
        showError(cfPasswordInput, 'Mat khau khong trung khop');
        return true;
    }

    return false;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isEmptyError = checkEmptyError([username, email, password, confirmpasword]);
    let isEmailError = checkEmailError(email);
    let isUserNameLengthError = checkLengthError(username, 3, 10);
    let isPasswordLengthError = checkLengthError(password, 3, 10);
    let isMatchError = checkMatchPasswordError(password, confirmpasword);

    if (isEmptyError || isEmailError || isUserNameLengthError || isPasswordLengthError || isMatchError) {
        // do nothing
    } else {
        // logic, call API, ...
    }
})