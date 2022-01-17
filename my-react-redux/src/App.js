import React from 'react';
import { connect } from 'react-redux'
// connect(state=>({...state}))(App)
function App(props) {
  console.log('props', props);
  const { dispatch, state } = props;
  return (
    <div className="App" id='app'>
      {state.map((item) => item.id + '<br/>')}
      <button onClick={() => {
        dispatch({
          type: "ADD"
        })
      }}>
        按钮
      </button>
    </div>
  );
}

// export default App;
export default connect(state => ({
  state
}))(App);
