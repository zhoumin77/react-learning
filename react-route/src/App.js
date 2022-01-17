import React, { useState } from 'react';
import { Routes, Route, Link, Switch, NavLink } from 'react-router-dom'
import router from './router/router'
import './index.css'
function App() {
  let [user, setUser] = useState('')
  return (

    <div className="App">
      <nav className="nav">
        {router.filter((item) => item.isNav).map((item, index) => {
          return (<NavLink
            key={index}
            exact={item.exact}
            to={item.isDynamic ? item.to : item.path}
            activeClassName="hover">
            {item.title}
          </NavLink>)
        })}
        {user ?
          (<div>
            用户名: {user}
            <button onClick={() => {
              setUser()
            }}>退出</button>
          </div>) :
          ''}
      </nav>

      <Switch>
        {router.map((item, index) => {
          return <Route key={index} path={item.path} exact={item.exact} render={(props) => {
            props = { user, setUser, ...props }
            return item.render(props)
          }} />
        })}
      </Switch>

    </div>

  );
}

export default App;
