const tabs = (tabsSelector, tabActiveClass, buttonsContainerSelector, buttonSelector, buttonActiveClass) => {
  const tabs = document.querySelectorAll(tabsSelector);
  const buttonsContainer = document.querySelector(buttonsContainerSelector);
  const buttons = document.querySelectorAll(buttonSelector);

  const hideElements = (elements, activeClass) => {
    elements.forEach( item => {
      item.classList.remove(activeClass);
    });
  };
  buttonsContainer.addEventListener('click', e => {
    
    buttons.forEach(item => {
      if (item === e.target) {
        hideElements(tabs, tabActiveClass);
        hideElements(buttons, buttonActiveClass);
        item.classList.add(buttonActiveClass);
      }
    });

    tabs.forEach(item => {
      if (e.target.dataset.pain === item.dataset.pain) {
        item.classList.add(tabActiveClass);
      }
    });
    
  });

}

export default tabs;