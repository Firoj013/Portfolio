document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default scroll-to-top behavior
      changeColor(this); // Pass the clicked link to the function
      scrollToSection(this.getAttribute('href')); // Pass the section id to the function
  });
});

  function changeColor(link) {
  link.style.color = window.getComputedStyle(link).getPropertyValue('color', ':hover');
}

  function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}