import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReduxMethod from './reduxmethod';
import ReduxHook from './reduxHook'

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './reducer'
import { BrowserRouter as Router, Routes, Route ,Switch} from 'react-router-dom'
// import { Switch, Route } from 'react-router'

ReactDOM.render(
  <Provider store={store}>
    <Router >
      <Switch>
        <Route exact path="/" element={<App />} />
        <Route path="/redux" element={<ReduxMethod />} />
        <Route path="/reduxhook" element={<ReduxHook />} />
      </Switch>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
