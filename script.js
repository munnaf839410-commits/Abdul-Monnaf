const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

document
  .getElementById('contact-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you! Message sent successfully.');
    this.reset();
  });
