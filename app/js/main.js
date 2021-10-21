import sliders from "./modules/sliders";
import wattbike from "./modules/wattbike";
import psychologist from "./modules/psychologist";
import tabs from "./modules/tabs";
import kinezio from "./modules/kinezio";
import insoles from "./modules/insoles";
import velo from "./modules/velo";
import mysport from './modules/mysport';
import reviews from "./modules/reviews";
import mse from './modules/mse';

window.addEventListener('DOMContentLoaded', () => {
  //run
try {
  if (document.querySelector('#run-buttons-container')) {
    tabs('.run__tabs', 'problems__text--active', '#run-buttons-container', '.problems__point', 'problems__point--active');
  }
  sliders();

  if (document.querySelector('.mysport')) {
    mysport();
  }

  if (document.querySelector('.reviews__wrapper-content-btn')) {
    reviews();
  }

  // mse
  mse('#run-report-mse');
  mse('#run-company-mse');



} catch(e){console.log(e)}

//wattbike
try {
  wattbike();

  mse('#wattbike-report-mse');
  mse('#wattbike-trener-mse');
} catch(e){console.log(e)}

//psychologist
try {
  psychologist();
  mse('#psy-person-mse');
} catch(e){console.log(e)}

//kinezio
try {
  kinezio();
  mse('#kinezio-center-mse');
} catch(e){console.log(e)}

//insoles
try {
  insoles();
  mse('#insoles-mistakes-mse');
  mse('#insoles-company-mse');
} catch(e){console.log(e)}

//velo
try {
  if (document.querySelector('#velo-buttons-container')) {
    tabs('.veloproblems__inner-tabs', 'veloproblems__inner-tabs--active', '#velo-buttons-container', '.veloproblems__point', 'veloproblems__point--big');
  }
  velo();
  mse('#velo-mistakes-mse');
  mse('#velo-specialist-mse');
  mse('#velo-bikes-mse');
} catch(e){console.log(e)}

});