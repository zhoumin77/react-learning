import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './reducer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routerList from './routers'
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {routerList.map((item, index) => {
          return (
            <Route exact={item.exact} path={item.path} key={index} element={item.element}></Route>
          )
        })}
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </Provider >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
