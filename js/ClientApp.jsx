// @flow
import React from 'react';
import { render } from 'react-dom';
// import Perf from 'react-addons-perf';
import App from './App';

//Perf tools on for dev not production
// window.Perf = Perf;
// Perf.start();

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};
renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
