import { getHelloElement } from './sub';

document.body.onload = function () {
  const newElm = getHelloElement();
  document.body.appendChild(newElm);
};