// @flow
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import Perf from 'react-addons-perf';
import App from './App';

// Perf tools on for dev not production
// window.Perf = Perf;
// Perf.start();

const renderApp = () => {
  render(
    <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'));
};
renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
