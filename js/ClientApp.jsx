import React from 'react';
import { render } from 'react-dom';

//line below you need a parathesis not a curlly bracelt because you want it to return immediately
const App = () => (
  <div className="app">
    <div className="landing">
      <h1>svideo</h1>
      <input type="text" placeholder="Search" />
      <a>or Browse All</a>
    </div>
  </div>
);

render(<App />, document.getElementById('app'));
