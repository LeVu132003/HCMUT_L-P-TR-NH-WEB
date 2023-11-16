function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var birthday = document.getElementById("birthday").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var country = document.getElementById("country").value;
    var about = document.getElementById("about").value;

    if (!validateName(firstName)) {
        alert("First name khônghợp lệ. Vui lòng nhập từ 2 đến 30 kí tự.");
        return;
    }

    if (!validateName(lastName)) {
        alert("Last name không hợp lệ. Vui lòng nhập từ 2 đến 30 kí tự.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Email không hợp lệ. Vui lòng nhập đúng định dạng email.");
        return;
    }

    if (!validatePassword(password)) {
        alert("Password không hợp lệ. Vui lòng nhập từ 2 đến 30 kí tự.");
        return;
    }

    if (birthday === "") {
        alert("Vui lòng chọn ngày sinh.");
        return;
    }

    if (gender === null) {
        alert("Vui lòng chọn giới tính.");
        return;
    }

    if (country === "") {
        alert("Vui lòng chọn quốc gia.");
        return;
    }
    if (about.length == 0) {
        alert("Vui lòng không để trống about.");
        return;

    }
    if (about.length > 10000) {
        alert("About không được vượt quá 10000 kí tự.");
        return;
    }

    alert("Complete!");
}

function validateName(name) {
    if(name.length < 2 || name.length > 30) {
        return false;
    }
    return true;
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
    return /^.{2,30}$/.test(password);
}
