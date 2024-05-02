let btn = document.querySelector('#button');
let name = document.querySelector('#name');
let subheading = document.querySelector('#subheading');
let check = 0;

btn.addEventListener("click", function () {
    if (check == 0) {
        subheading.innerHTML = "Request sent";
        subheading.style.color = "green";
        btn.innerHTML = "Remove request";
        check = 1
    } else {
        subheading.innerHTML = "Not a firned";
        subheading.style.color = "grey";
        btn.innerHTML = "Send request";
        check = 0;
    }
})