import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Redux from './redux';
import ReduxHook from './reduxHook'

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './reducer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/redux" element={<Redux />} />
        <Route path="/reduxhook" element={<ReduxHook />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  ,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
