import React from 'react';
import { connect } from 'react-redux'

function Redux(props) {
  const { dispatch, state } = props;
  console.log('props33', props, state);

  return (
    <div>

      {state.map((item) => item.id + '<br/>')}
      <br />

      <button onClick={() => {
        dispatch({
          type: "TIME__ADD"
        })
      }}>
        按钮
      </button>
    </div>

  )
}

export default connect(state => {
  console.log('state2', state);
  return (
    {
      state: state.time
    }
  )
})(Redux);