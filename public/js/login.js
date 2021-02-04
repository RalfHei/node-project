const loginButton = document.getElementById('login-button');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');


loginButton.addEventListener('click', e => {
    const data = {username: usernameInput.value, password: passwordInput.value};

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if ( data.response == 'success' ) {
            window.location.href = "/";
        }
        else if (data.response == 'errorWrongCredentials'){
            const usernameError = document.getElementById('username-error');
            usernameError.innerHTML = `
            <p>Username or password is not valid!</p>
        `
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

});
