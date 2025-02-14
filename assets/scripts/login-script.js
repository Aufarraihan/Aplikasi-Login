/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/* Membuat variabel untuk setiap elemen view. */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/* Membuat variabel untuk menyimpan informasi email dan password */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/* Memastikan bahwa nilai email dan password sesuai dengan nilai yang disimpan */
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    
    /* Jika sesuai maka program akan berpindah ke halaman home */
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;

    /* Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah */
    if (email == expectedEmail && password == expectedPassword) {
      goToHome();
    } else {
      showPopUp();
    }
});
