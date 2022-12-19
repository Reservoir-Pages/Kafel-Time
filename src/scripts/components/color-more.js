const colorBlocks = document.querySelectorAll('.card__color');
colorBlocks.forEach(block => {
  const moreColorBtn = block.querySelector('.color-btn');
  const colorsCount = block.querySelectorAll('.is-hidden').length;
  if (moreColorBtn) {
    moreColorBtn.textContent = `+${colorsCount}`;
    moreColorBtn.addEventListener('click', (e) => {
      block.querySelectorAll('.is-hidden').forEach(color => {
        color.classList.remove('is-hidden');
        moreColorBtn.classList.remove('color-btn');
        moreColorBtn.textContent = '';
      });
    });
  };
});

const colorBlocksHorizontal = document.querySelectorAll('.card-horizontal__color');
colorBlocksHorizontal.forEach(block => {
  const moreColorBtn = block.querySelector('.color-btn');
  const colorsCount = block.querySelectorAll('.is-hidden').length;
  if (moreColorBtn) {
    moreColorBtn.textContent = `+${colorsCount}`;
    moreColorBtn.addEventListener('click', (e) => {
      block.querySelectorAll('.is-hidden').forEach(color => {
        color.classList.remove('is-hidden');
        moreColorBtn.classList.remove('color-btn');
        moreColorBtn.textContent = '';
      });
    });
  };
});
