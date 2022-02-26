import React from 'react';
import { connect } from 'react-redux'

function Redux(props) {
  console.log('props', props);
  const { dispatch, state } = props;

  return (
    <div>


      {state.map((item) => item.id + '<br/>')}
      <button onClick={() => {
        dispatch({
          type: "ADD"
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