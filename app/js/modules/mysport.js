const mysport = () => {
  const loop = () => {
    const texts = document.querySelectorAll('.mysport > p');

    texts.forEach((n) => {
      n.style.opacity = '0';
    });

    texts.forEach((n, i) => {
      setTimeout(() => {
        n.style.opacity = "1";
      }, i * 500);
    });
  }

  function autoNext() {
    loop();
    setTimeout(autoNext, 6000); 
  }
  setTimeout(autoNext, 1000);

};

export default mysport;
