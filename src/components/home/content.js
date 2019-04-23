//import
import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'

class Home extends React.Component {

  render() {

    return (
      <div>
        <p>Hello world!!!</p>
      </div>
    );
  }
}

export default connect(null, null, null)(Home);