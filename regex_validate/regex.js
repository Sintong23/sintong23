const regexInputSintong = document.querySelector("#sintong");
const validationTextSintong = document.querySelector("#sintong-validation-text");

// Menggunakan ekspresi reguler untuk memvalidasi alamat email
const EMAIL_REGEX = new RegExp("^\\S+@\\S+\\.\\S+$");

regexInputSintong.addEventListener("input", function () {
    validationTextSintong.innerHTML = EMAIL_REGEX.test(regexInputSintong.value) ? "Valid" : "Invalid anda harus membuat menggunakan @xx.xx untuk membuat email";
});

const regexInputSintong2 = document.querySelector("#sintong2");
const validationTextSintong2 = document.querySelector("#sintong2-validation-text");

// Ekspresi reguler untuk memvalidasi input dengan huruf besar di awal, dan minimal satu angka dan satu huruf
const PASSWORD_REGEX = new RegExp("^(?=.*[A-Z])(?=.*\\d)(?=.*[a-zA-Z]).+$");

regexInputSintong2.addEventListener("input", function () {
    validationTextSintong2.innerHTML = PASSWORD_REGEX.test(regexInputSintong2.value) ? "Valid" : "Invalid, Huruf pertama harus huruf besar dan setidaknya ada 1 angka dan huruf";
});

const regexInputSintong3 = document.querySelector("#sintong3");
const validationTextSintong3 = document.querySelector("#sintong3-validation-text");

const URL_REGEX = new RegExp("^(https?|HTTPS?)://.+");

regexInputSintong3.addEventListener("input", function () {
    validationTextSintong3.innerHTML = URL_REGEX.test(regexInputSintong3.value) ? "Valid" : "Invalid, Protokol internet harus dimulai dengan 'http://' atau 'https://'";
});


const regexInputSintong4 = document.querySelector("#sintong4");
const validationTextSintong4 = document.querySelector("#sintong4-validation-text");

const DATE_REGEX = new RegExp("^(0?[1-9]|[12]\\d|3[01])\\/(0?[1-9]|1[0-2])\\/((19|20)\\d{2})$");

regexInputSintong4.addEventListener("input", function () {
    validationTextSintong4.innerHTML = DATE_REGEX.test(regexInputSintong4.value) ? "Valid" : "Invalid, Format tanggal harus dd/mm/yyyy";
});


const regexInputSintong5 = document.querySelector("#sintong5");
const validationTextSintong5 = document.querySelector("#sintong5-validation-text");

const PHONE_NUMBER_REGEX = new RegExp("^(08|\\+62)?\\d{10,13}$");;

regexInputSintong5.addEventListener("input", function () {
    validationTextSintong5.innerHTML = PHONE_NUMBER_REGEX.test(regexInputSintong5.value) ? "Valid" : "Invalid, Format nomor harus diawali 08 atau +62 dengan minimal 10 angka dan maksimal 13 angka";
});