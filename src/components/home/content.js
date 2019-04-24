//import
import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import dataActions from '../../actions/data'
import httpActions from '../../actions/http'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount(){
    this.props.loading();
  }

  connectAction(){
    this.props.getData.newVar = 'newData';
    this.props.changeLoading();
  }

  connectAPI(){
    this.props.getRequest("", "", "").then(
      (response) => {
        console.log(response)
      },
      (err) => {
        console.log(err)
      }
    );
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.connectAction.bind(this)}>Conectar action</button>
        <button type="button" onClick={this.connectAPI.bind(this)}>Conectar API</button>
      </div>
    );
  }
}

Home.propTypes = {
  loading: PropTypes.func.isRequired,
  getData: PropTypes.object.isRequired,
  getRequest: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    getData: state.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loading: () => dispatch(dataActions.loading()),
    changeLoading: () => dispatch(dataActions.changeLoading()),
    getRequest: (row, controller, token) => dispatch(httpActions.getRequest(row, controller, token))
  }
};

export default connect(mapStateToProps, mapDispatchToProps, null)(Home);