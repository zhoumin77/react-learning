import React from 'react';
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>

      <nav>
        <Link to='/redux'>redux</Link>
        <br />
        <Link to='/reduxhook'>ReduxHook</Link>
      </nav>

      <Outlet></Outlet>

    </div>
  )
}

export default App;
