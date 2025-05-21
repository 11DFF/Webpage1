window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  sections.forEach(function(section) {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 50) { // Добавляем небольшой отступ
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});
