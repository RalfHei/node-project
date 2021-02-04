const registerButton = document.getElementById('register-button');


registerButton.addEventListener('click', e => {
    if(this.validate(e) == true) {

    const data = {username: username.value, password: password.value};

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
        if ( data.response == 'success' ) {
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

    if (!username || username === '' || username.length < 6) {
      const nameError = document.getElementById("username-error");
      nameError.innerHTML = `
          <p>Username not valid!</p>
      `
      return false
    }

    if(password.length < 6 || !password) {
      const passwordError = document.getElementById("password-error");
      passwordError.innerHTML = `
          <p>Password not valid!</p>
      `
      return false
    }

    if(password !== passwordAgain) {
      const passwordAgainError = document.getElementById("password-again-error");
      passwordAgainError.innerHTML = `
          <p>Password must be the same!</p>
      `
      return false
    }
    else{
        console.log("yooo")
        return true
    }
  }
