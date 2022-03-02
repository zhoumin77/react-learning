import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './reducer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { Switch, Route } from 'react-router'
import ReduxMethod from './reduxmethod';
import ReduxHook from './reduxHook'
import ReduxThunk from './reduxthunk'
ReactDOM.render(
  <Provider store={store}>
    <Router >
      <Routes>
        <Route exact path="/" element={<App />} >
          <Route exact path="redux" element={<ReduxMethod />} />
          <Route exact path="reduxhook" element={<ReduxHook />} />
          <Route exact path="ReduxThunk" element={<ReduxThunk />} />
        </Route>

      </Routes>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

