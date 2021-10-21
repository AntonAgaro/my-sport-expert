const mse = (svg) => {
  const svgContainer = document.querySelector(svg);
  const parts = svgContainer.querySelectorAll('.mse-part');

let count = 0;

const hideParts = () => {
  parts.forEach(part => {
    part.classList.remove('cls-1');
    part.classList.add('cls-3');
  });
};

hideParts();

const showPart = (n) => {
  hideParts();

  parts.forEach((part, index) => {
    if (index === n) {
      part.classList.remove('cls-3');
      part.classList.add('cls-1');
    }
  });
};

const interval = setInterval(() => {
  
  if (count === parts.length - 1) {
    count = 0;
  } else {
    count++;
  }

  showPart(count);
}, 1000);
};

export default mse;