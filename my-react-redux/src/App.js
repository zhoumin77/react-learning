import React from 'react';
import { Link,NavLink } from 'react-router-dom'

function App() {
  return (
    <div>
      
      <NavLink to='/redux'>redux</NavLink>
      <br/>
      <NavLink to='/reduxhook'>ReduxHook</NavLink>
    </div>

  )
}

export default App;
