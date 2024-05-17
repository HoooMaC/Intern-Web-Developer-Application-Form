import './style.css'

const API = 'http://localhost:8080'

const loginForm = document.getElementById('login')
const registerForm = document.getElementById('register')

console.log(registerForm)
console.log(loginForm)

const handleRegister = async (event) => {
    event.preventDefault();

    // ------------------------------------------
    // just because we don't have api
    const modal = document.getElementById('modal')
    if (modal) {
        modal.classList.add('show')

        // countdown
        let count = 3;
        modalTimer.innerText = 3;
        const countdown = setInterval(() => {
            modalTimer.innerText = count;
            count--;

            if (count < 0) {
                clearInterval(countdown);
                modal.classList.remove('show');

                setTimeout(() => {
                    window.location.href = '/home';
                }, 1000);
            }
        }, 1000);
    }

    // ------------------------------------------
    // If we have an api
    const formData = {
        name: event.target.elements.name.value,
        email: event.target.elements.email.value,
        password: event.target.elements.password.value
    };

    try {
        const response = await fetch(`${API}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Success:', data);
        // Handle success (e.g., display a message, redirect, etc.)
    } catch (error) {
        console.error('Error:', error);
        // Handle error (e.g., display an error message)
    }
}

const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // ------------------------------------------
    // just because we don't have api
    const modal = document.getElementById('modal')
    if (modal) {
        modal.classList.add('show')

        // countdown
        let count = 3;
        modalTimer.innerText = 3;
        const countdown = setInterval(() => {
            modalTimer.innerText = count;
            count--;

            if (count < 0) {
                clearInterval(countdown);
                modal.classList.remove('show');

                setTimeout(() => {
                    window.location.href = '/home';
                }, 1000);
            }
        }, 1000);
    }

    // ------------------------------------------
    // If we have an api
    const formData = {
        name: event.target.elements.name.value,
        email: event.target.elements.email.value,
        password: event.target.elements.password.value
    };

    try {
        const response = await fetch(`${API}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Success:', data);
        // Handle success (e.g., display a message, redirect, etc.)
    } catch (error) {
        console.error('Error:', error);
        // Handle error (e.g., display an error message)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    registerForm.addEventListener('submit', handleRegister);
    loginForm.addEventListener('submit', handleLogin);
});