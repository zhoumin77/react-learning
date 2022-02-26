import React from 'react';
import { connect } from 'react-redux'

function Redux(props) {
  const { dispatch, state } = props;
  console.log('props', props,state);

  return (
    <div>
      {state.time.map((item) => item.id + '<br/>')}
      <hr />

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

export default connect(state => ({
  state
}))(Redux);