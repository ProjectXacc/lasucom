// Handle Navbar Dropdown
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});



// Dark Mode Toggle
const themeToggle = document.querySelector('.toggle-theme');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Button Actions
const buttons = document.querySelectorAll('.modern-btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const action = button.textContent.trim();
        switch (action) {
            case 'Take a Quiz':
                alert('Redirecting to the quiz page...');
                window.location.href = 'Quiz.html';
                break;
            case 'Download PDF':
                alert('Downloading PDF...');
                // Simulate file download
                window.location.href = 'pdf.html';
                break;
            case 'Watch Video':
                alert('Opening video lectures...');
                window.location.href = 'video.html';
                break;
            default:
                alert('Action not recognized.');
        }
    });
});