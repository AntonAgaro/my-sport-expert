const reviews = () => {
  const buttons = document.querySelectorAll('.reviews__wrapper-content-btn');
  const reviesContainer = document.querySelector('.reviews__wrapper');
  const redBlock = document.querySelector('.reviews__redblock');
  const redBlockTriangle = document.querySelector('.reviews__redblock-triangle');

  redBlock.style.display = 'none';
  redBlockTriangle.style.display = 'none';

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      redBlock.style.display = 'flex';
      redBlockTriangle.style.display = 'block';

      if (redBlock.classList.contains('reviews__redblock--reverse')) {
        console.log(12312);
          reviesContainer.style.transform = 'translateX(200px)';
      } else {
        reviesContainer.style.transform = 'translateX(-200px)';
      }
     
     
    });
  });

};

export default reviews;