document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('navbar').classList.toggle('show');
});

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! I'll get back to you soon.");
  this.reset();
});
