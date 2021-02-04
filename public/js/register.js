const registerButton = document.getElementById('register-button');


registerButton.addEventListener('click', e => {
    if (this.validate(e) == true) {

<<<<<<< HEAD
        const data = { username: usernameInput.value, password: passwordInput.value };
=======
    const data = {username: username.value, password: password.value};
>>>>>>> c2113527f8ea6d4197e807d0b4da830f482aa681

        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.response == 'success') {
                    window.location.href = "/";
                } else if (data == "errorUserExists") {
                    $("#register-error").textContent("User already exists!");
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }
});

function validate(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const passwordAgain = document.getElementById("password-again").value;

<<<<<<< HEAD
    if (!username || username === '' || username.length < 4) {
        const nameError = document.getElementById("username-error");
        nameError.innerHTML = `
=======
    if (!username || username === '' || username.length < 6) {
      const nameError = document.getElementById("username-error");
      nameError.innerHTML = `
>>>>>>> c2113527f8ea6d4197e807d0b4da830f482aa681
          <p>Username not valid!</p>
      `
        return false
    }

<<<<<<< HEAD
    if (password.length < 6 || !password) {
        const passwordError = document.getElementById("password-error");
        passwordError.innerHTML = `
=======
    if(password.length < 6 || !password) {
      const passwordError = document.getElementById("password-error");
      passwordError.innerHTML = `
>>>>>>> c2113527f8ea6d4197e807d0b4da830f482aa681
          <p>Password not valid!</p>
      `
        return false
    }

<<<<<<< HEAD
    if (password !== passwordAgain) {
        const passwordAgainError = document.getElementById("password-again-error");
        passwordAgainError.innerHTML = `
=======
    if(password !== passwordAgain) {
      const passwordAgainError = document.getElementById("password-again-error");
      passwordAgainError.innerHTML = `
>>>>>>> c2113527f8ea6d4197e807d0b4da830f482aa681
          <p>Password must be the same!</p>
      `
        return false
    }
    else {
        console.log("yooo")
        return true
    }
<<<<<<< HEAD
}
=======
  }
>>>>>>> c2113527f8ea6d4197e807d0b4da830f482aa681
