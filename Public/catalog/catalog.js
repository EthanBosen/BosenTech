document.getElementById('year').textContent = new Date().getFullYear();

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('show');
});

hamburger.addEventListener('touchstart', function(event) {
    event.preventDefault(); // Prevent default touch behavior
    navLinks.classList.toggle('show');
});