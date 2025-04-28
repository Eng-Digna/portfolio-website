// Greeting function
function greetUser() {
    const now = new Date();
    const hour = now.getHours();
    let greetingMessage;

    if (hour < 12) {
        greetingMessage = "Good Morning!";
    } else if (hour < 18) {
        greetingMessage = "Good Afternoon!";
    } else {
        greetingMessage = "Good Evening!";
    }

    // Create a new paragraph element to show the greeting
    const greeting = document.createElement("p");
    greeting.textContent = greetingMessage;
    greeting.style.fontSize = "20px";
    greeting.style.marginTop = "10px";
    greeting.style.color = "#555";

    // Add the greeting to the main section
    document.querySelector("main").prepend(greeting);
}

// Run the greeting function when the page loads
window.onload = greetUser;

// Contact Form Validation
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        const phonePattern =  /^[0-9]{10}$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        }

        if (!phonePattern.test(phone)) {
            alert("Please enter a 10-digit phone number.");
            event.preventDefault();
        }
    });
});
// Toggle Project Details
document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const details = this.nextElementSibling;
            if (details.style.display === "none") {
                details.style.display = "block";
                this.textContent = "Hide Details";
            } else {
                details.style.display = "none";
                this.textContent = "Show Details";
            }
        });
    });
});
// Dark/Light Mode Toggle
document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");

    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});
