const tabs = (tabsSelector, tabActiveClass, buttonsContainerSelector, buttonSelector, buttonActiveClass, arrowNextSelector, arrowPrevSelector) => {
  const tabs = document.querySelectorAll(tabsSelector);
  const buttonsContainer = document.querySelector(buttonsContainerSelector);
  const buttons = document.querySelectorAll(buttonSelector);
  const arrowNext = document.querySelector(arrowNextSelector);
  const arrowPrev = document.querySelector(arrowPrevSelector);
  let counter = 0;

  const hideElements = (elements, activeClass) => {
    elements.forEach( item => {
      item.classList.remove(activeClass);
    });
  };

  buttonsContainer.addEventListener('click', e => {
    buttons.forEach((item, index) => {
      if (item === e.target) {
        hideElements(tabs, tabActiveClass);
        hideElements(buttons, buttonActiveClass);
        item.classList.add(buttonActiveClass);
        counter = index;
      }
    });

    tabs.forEach(item => {
      if (e.target.dataset.pain === item.dataset.pain) {
        item.classList.add(tabActiveClass);
      }
    });
    
  });

  arrowNext.addEventListener('click', () => {
    counter += 1;
    if (counter >= tabs.length) {
      counter = 0;
    }

    buttons.forEach((item, index) => {
      if (index === counter) {
        hideElements(tabs, tabActiveClass);
        hideElements(buttons, buttonActiveClass);
        item.classList.add(buttonActiveClass);
      }
    });

    tabs.forEach((item, index) => {
      if (index === counter) {
        item.classList.add(tabActiveClass);
      }
    });

  });

  arrowPrev.addEventListener('click', () => {
    counter = counter - 1;
    if (counter < 0) {
      counter = tabs.length - 1;
    }
    console.log(counter);

    buttons.forEach((item, index) => {
      if (index === counter) {
        hideElements(tabs, tabActiveClass);
        hideElements(buttons, buttonActiveClass);
        item.classList.add(buttonActiveClass);
      }
    });

    tabs.forEach((item, index) => {
      if (index === counter) {
        item.classList.add(tabActiveClass);
      }
    });

  });

};

export default tabs;