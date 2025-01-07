document.querySelectorAll('nav div a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const extraPadding = 20; // Adjust for additional padding
        const scrollToPosition = target.offsetTop - navbarHeight - extraPadding;

        window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
        });
    });
});