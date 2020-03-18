import { getHelloElement } from './sub';
import jQuery from 'jquery';

window.jQuery = jQuery;
window.$ = jQuery;

document.body.onload = function() {
  const newElm = getHelloElement();
  document.body.appendChild(newElm);
};
