// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark mode toggle
const toggleDarkMode = document.createElement('button');
toggleDarkMode.innerText = "Toggle Dark Mode";
toggleDarkMode.style.position = "fixed";
toggleDarkMode.style.bottom = "10px";
toggleDarkMode.style.right = "10px";
document.body.appendChild(toggleDarkMode);

toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
