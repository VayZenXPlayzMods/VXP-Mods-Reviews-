const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  const allCards = document.querySelectorAll('.mod-card');
  
  allCards.forEach((card) => {
    const titleElement = card.querySelector('.mod-title');
    if (titleElement) {
      const modTitle = titleElement.textContent.toLowerCase();
      
      if (modTitle.includes(searchString)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    }
  });
});


   