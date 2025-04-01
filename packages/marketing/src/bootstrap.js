import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log("From Marketing");

function mount(elem) {
  ReactDOM.render(<App />, elem)
}

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById('_marketing-dev-root');
  if (devRoot) mount(devRoot);
}

export { mount };
