document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formSuccess').style.display = 'block';
    this.reset();
});
