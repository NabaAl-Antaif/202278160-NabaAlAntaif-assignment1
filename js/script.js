// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//button interaction 
const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMsg");

form.addEventListener("submit", function(e) {
    if (!form.checkValidity()) {
        return;
    }
    e.preventDefault();
    messageBox.textContent = "Message sent successfully! ✔";
    messageBox.style.color = "green";
    form.reset();
});