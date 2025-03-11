document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    function showError(id, message) {
        document.getElementById(id).textContent = message;
    }

    function clearError(id) {
        document.getElementById(id).textContent = '';
    }

    let userId = document.getElementById('userId').value;
    if (userId.length < 6) {
        showError('userIdError', 'Käyttäjä ID:n tulee olla vähintään 6 merkkiä pitkä.');
        valid = false;
    } else {
        clearError('userIdError');
    }

    let password = document.getElementById('password').value;
    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@£$€&%#]).{6,}$/;
    if (!passwordRegex.test(password)) {
        showError('passwordError', 'Salasanan tulee olla vähintään 6 merkkiä pitkä ja sisältää yksi iso kirjain, yksi numero ja erikoismerkki (!@£$€&%#).');
        valid = false;
    } else {
        clearError('passwordError');
    }

    let postalCode = document.getElementById('postalCode').value;
    if (!/^[0-9]{5}$/.test(postalCode)) {
        showError('postalCodeError', 'Postinumeron tulee olla 5 numeroa.');
        valid = false;
    } else {
        clearError('postalCodeError');
    }

    let email = document.getElementById('email').value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('emailError', 'Sähköpostiosoitteen tulee olla oikeassa muodossa.');
        valid = false;
    } else {
        clearError('emailError');
    }

    if (!document.querySelector('input[name="gender"]:checked')) {
        showError('genderError', 'Valitse sukupuoli.');
        valid = false;
    } else {
        clearError('genderError');
    }

    if (valid) {
        alert('Lomake hyväksytty!');
    }
});
