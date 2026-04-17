// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(
    function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

//button interaction 
const contactForm = document.getElementById("contactForm");
const messageBox = document.getElementById("formMsg");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = contactForm.elements["name"];
    const email = contactForm.elements["email"];
    const message = contactForm.elements["message"];

    // empty name field validation
    if (name.value.trim() === "") {
        showMessage("Please enter your name", "red");
        return;
    }

    // empty email field validation
    if (email.value.trim() === "") {
        showMessage("Email is required", "red");
        return;
    }

    // invalid email format validation
    if (!email.value.includes("@")) {
        showMessage("Please enter a valid email", "red");
        return;
    }

    // empty message field validation
    if (message.value.trim() === "") {
        showMessage("Message cannot be empty", "red");
        return;
    }

    // If all validations pass, show success message and reset the form
    showMessage("Message sent successfully", "green");
    contactForm.reset();
});

// Function to display messages
function showMessage(text, color) {
    messageBox.textContent = text;
    messageBox.style.color = color;
}

//filter projects by category
const projects = document.querySelectorAll(".project-card");

function filterProjects(category) {
    projects.forEach(project => {
        if (category === "all" || project.dataset.category === category) {
            project.style.display = "flex";
        } else {
            project.style.display = "none";
        }
    });
}

//toggle dark mode
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

themeToggleBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    const icon = themeToggleBtn.querySelector(".icon");
    if (body.classList.contains("dark-mode")) {
        icon.textContent = "☀️";
    } 
    else {icon.textContent = "🌙";
    }   
});
