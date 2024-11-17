document.addEventListener('DOMContentLoaded', function () {
    // Select elements only after the DOM is fully loaded
    const signInElement = document.querySelector('.sign-in');
    const signUpElement = document.querySelector('.sign-up');
    const accountReElement = document.querySelector('.sign-up-29');
    const accountElement = document.querySelector('.sign-in-8');
    const homereturn = document.querySelector('.saasmito');
    const productSpan = document.querySelector('.product');
    const popupContent = document.getElementById('popupContent');

    // Update the login button class to "button-13"
    const loginButton = document.querySelector(".button-13"); // Updated class name
    const emailInput = document.querySelector(".text-field-input");
    const passwordInput = document.querySelector(".text-field-input-f");
    const errorMessage = document.createElement("div");

    // Registered credentials for validation
    const registeredAccounts = [
        { email: "dev@sharma.com", password: "1234" },
        { email: "john.doe@example.com", password: "password123" },
        { email: "alice.smith@example.com", password: "alicepass" }
    ];

    // Add the error message div to the form (hidden by default)
    errorMessage.classList.add("error-message");
    errorMessage.style.display = "none";
    document.body.appendChild(errorMessage);

    // -------------- Event Listeners --------------

    // Check if loginButton, emailInput, and passwordInput exist before adding event listeners
    if (loginButton) {
        loginButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent form submission

            // Get the values of email and password inputs
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            // Validate the inputs
            if (email === "" || password === "") {
                showError("Please fill in both email and password.");
            } else {
                // Find account with matching email and password
                const account = registeredAccounts.find(acc => acc.email === email && acc.password === password);

                if (!account) {
                    showError("Invalid email or password. Please try again.");
                } else {
                    // Successful login
                    window.location.href = 'index.html';  // Redirect to index.html
                }
            }
        });
    }

    // Function to show error message
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = "block";
        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 3000); // Hide error after 3 seconds
    }

    // Add event listener for 'Sign In' click
    if (signInElement) {
        signInElement.addEventListener('click', function () {
            window.location.href = "login.html";  // Redirect to login.html
        });
    }

    // Add event listener for 'Sign Up' click
    if (signUpElement) {
        signUpElement.addEventListener('click', function () {
            window.location.href = "signup.html";  // Redirect to signup.html
        });
    }

    // Add event listener for account redirection (login -> signup and vice versa)
    if (accountElement) {
        accountElement.addEventListener('click', function () {
            window.location.href = "login.html";  // Redirect to login.html
        });
    }

    if (accountReElement) {
        accountReElement.addEventListener('click', function () {
            window.location.href = "signup.html";  // Redirect to signup.html
        });

        
    }

    if (homereturn) {
        homereturn.addEventListener('click', function () {
            window.location.href = "index.html";  // Redirect to signup.html
        }); }

    // Handle product popup functionality
    productSpan.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click event from propagating to the document
        popupContent.style.display = 'block';  // Show the popup
        setTimeout(() => {
            popupContent.style.opacity = '1';  // Fade-in effect
            popupContent.style.transform = 'translateY(0)'; // Optional: smooth sliding effect
        }, 10);  // Small delay to ensure display change happens first
    });

    // Close the popup when clicking anywhere outside of it
    document.addEventListener('click', function () {
        popupContent.style.opacity = '0';  // Fade-out effect
        popupContent.style.transform = 'translateY(-20px)';  // Optional: smooth sliding effect
        setTimeout(() => {
            popupContent.style.display = 'none';  // Hide the popup after fade-out
        }, 300);  // Delay to match the transition duration
    });

    // Prevent the popup from closing when clicking inside the popup itself
    popupContent.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent closing the popup when clicking inside it
    });
});
