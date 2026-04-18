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

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");

    // Reset all errors
    nameError.style.display = "none";
    emailError.style.display = "none";
    messageError.style.display = "none";

    let hasError = false;

    if (name.value.trim() === "") {
        nameError.textContent = "Name is required";
        nameError.style.display = "block";
        hasError = true;
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Email is required";
        emailError.style.display = "block";
        hasError = true;
    } else if (!email.value.includes("@")) {
        emailError.textContent = "Please enter a valid email";
        emailError.style.display = "block";
        hasError = true;
    }

    if (message.value.trim() === "") {
        messageError.textContent = "Message cannot be empty";
        messageError.style.display = "block";
        hasError = true;
    }

    // If all validations pass, show success message and reset the form
    if (!hasError) {
        const successMessage = document.getElementById("SuccessMsg");

        // Countdown start value
        let countdown = 5;

        // Show initial message
        successMessage.style.display = "block";
        successMessage.textContent = `Message sent successfully ${countdown} .`;

        // Start countdown
        const timer = setInterval(() => {
            countdown--;
            successMessage.textContent = `Message sent successfully ${countdown} .`;
            if (countdown === 0) {
                clearInterval(timer);
                successMessage.style.display = "none";
            }
        }, 1000);
        contactForm.reset();
    }
});

// Function to display success messages
function showMessage(text) {
    messageBox.textContent = text;
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
const profilePic = document.querySelector(".profile-pic");
const icon = themeToggleBtn.querySelector(".icon");

const savedTheme = localStorage.getItem("theme");

// Apply saved theme on page load
if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    icon.textContent = "☀️";
    profilePic.src = "assets/images/logoDark.png";
} else {
    icon.textContent = "🌙";
    profilePic.src = "assets/images/logo.png";
}

themeToggleBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        icon.textContent = "☀️";
        profilePic.src = "assets/images/logoDark.png"; // Change to dark mode profile picture
        localStorage.setItem("theme", "dark"); // Save theme preference to localStorage
    } 
    else {
        icon.textContent = "🌙";
        profilePic.src = "assets/images/logo.png"; // Change back to light mode profile picture
        localStorage.setItem("theme", "light"); // Save theme preference to localStorage
    }   
});

// Fetch GitHub repository data
async function loadRepos() {
    const repoList = document.getElementById("repo-list");

    try {
        const response = await fetch("https://api.github.com/users/NabaAnteef/repos");

        if (!response.ok) {
        throw new Error("Failed to fetch repositories");
        }

        const repos = await response.json();

        repoList.innerHTML = repos
        .map(repo => `
            <div class="repo-container">
                <div class="repo-card">
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "No description available"}</p>
                    <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                </div>
            </div>
        `)
        .join("");

    } catch (error) {
        repoList.innerHTML = `<p class="error">⚠️ Could not load projects. Please try again later.</p>`;
    }
}

loadRepos();