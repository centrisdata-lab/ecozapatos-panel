const header = document.getElementById('header');

const toggleHeaderShadow = () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
};

window.addEventListener('scroll', toggleHeaderShadow, { passive: true });
toggleHeaderShadow();
