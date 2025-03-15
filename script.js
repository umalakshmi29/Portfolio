document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Responsive Navbar Toggle
    const nav = document.querySelector("nav ul");
    const toggleBtn = document.createElement("button");
    toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    toggleBtn.classList.add("nav-toggle");

    document.querySelector("nav").prepend(toggleBtn);
    
    toggleBtn.addEventListener("click", function() {
        nav.classList.toggle("active");
    });
});
