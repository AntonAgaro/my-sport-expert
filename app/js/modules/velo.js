const velo = () => {

  const time = 1000;
  const step = 1;

  const outNum = (num, elem) => {
    // const element = document.querySelector(elem);
    let n = 0;
    const t = Math.round(time / (num / step));
    const interval = setInterval(() => {
      n = n + step; 
      if (n === num) {
        clearInterval(interval);
      }
      elem.innerHTML = n;
    }, t);
  };

  const veloChecks = () => {
    const lists = document.querySelectorAll('.indicators__list');
    const checks = document.querySelectorAll('.indicators__checks-input');
    
    const hideLists = () => {
      lists.forEach(item => item.style.display = 'none');
    };

    hideLists();

    checks.forEach(item => {
      item.addEventListener('click', (e) => {
        checks.forEach(item => {
          item.checked = false;
          e.target.checked = true;

          lists.forEach(item => {
            if (item.dataset.check === e.target.dataset.check) {
              hideLists();
              item.style.display = 'flex';
              
              const numbers = item.querySelectorAll('.indicators__list-number > span');
              numbers.forEach(item => {
                outNum(+item.innerHTML, item);
              });
            }
          });
        });
      }); 
    });
  };

  veloChecks();

  const veloTabs = () => {
    const tabs = document.querySelectorAll('.custom__list-item');
    const tabsAboutLists = document.querySelectorAll('.custom__main-list');
    const tabsResume = document.querySelectorAll('.custom__tab-resume');

    const hideTabsAboutLists = () => {
      tabsAboutLists.forEach(item => item.classList.remove('custom__main-list--active'));
      tabsResume.forEach(item => item.classList.remove('custom__tab-resume--active'));
    };

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(tab => tab.classList.remove('custom__list-item--active'));
        hideTabsAboutLists();
        tabsAboutLists.forEach(list => {
          if (tab.dataset.custom === list.dataset.custom) {
            list.classList.add('custom__main-list--active');
            tab.classList.add('custom__list-item--active');
          }
        });

        tabsResume.forEach(resume => {
          if (tab.dataset.custom === resume.dataset.custom) {
            resume.classList.add('custom__tab-resume--active');
          }
        })

        
      });
    });

  };

  veloTabs();

};

export default velo;