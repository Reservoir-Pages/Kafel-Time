// Кнопка избранное
const favoriteIcons = document.querySelectorAll('.favorite-icon');
// console.log(favoriteIcons);
if (favoriteIcons) {
  favoriteIcons.forEach(favoriteIcon => {
      favoriteIcon.addEventListener('click', (e) => {
        favoriteIcon.classList.toggle('favorite-icon--active');
      });
  });
};
