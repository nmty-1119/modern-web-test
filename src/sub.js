function getHelloElement() {
  const divElm = document.createElement('div');
  const newContent = document.createTextNode('Hello, World!');
  divElm.appendChild(newContent);
  return divElm;
}

export { getHelloElement };
