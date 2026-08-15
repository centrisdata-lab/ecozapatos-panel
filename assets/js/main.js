// EcoZapatos — interacciones del catálogo

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  });

  const searchInput = document.getElementById('searchInput');
  const chips = document.querySelectorAll('.chip');
  const cards = document.querySelectorAll('.product-card');
  const noResults = document.getElementById('noResults');

  let activeFilter = 'todos';

  function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach(card => {
      const name = card.dataset.name;
      const material = card.dataset.material;
      const matchesFilter = activeFilter === 'todos' || material === activeFilter;
      const matchesSearch = name.includes(query);
      const show = matchesFilter && matchesSearch;
      card.style.display = show ? '' : 'none';
      if (show) visibleCount++;
    });

    noResults.hidden = visibleCount !== 0;
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.dataset.filter;
      applyFilters();
    });
  });

  searchInput.addEventListener('input', applyFilters);
});
