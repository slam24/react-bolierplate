//import
import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import dataActions from '../../actions/data'
import httpActions from '../../actions/http'

import ModalForm from './form'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount(){
    this.props.loading();
  }

  connectAction(){
    this.props.getData.newVar = 'newData';
    this.props.changeLoading("new");
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
        <ModalForm ref={ref => this.chartsComponent = ref }/>
        <button className="btn btn-success" onClick={this.connectAction.bind(this)}>Conectar action</button>
        <button className="btn btn-info" onClick={this.connectAPI.bind(this)}>Conectar API</button>
        <button className="btn btn-warning" onClick={(e) => this.chartsComponent.handleShow()}>Open modal with empty form</button>
        <button className="btn btn-warning" onClick={(e) => this.chartsComponent.handleShow({"name":"karl", "phone": "8888888"})}>Open modal with filled form</button>
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
    changeLoading: (data) => dispatch(dataActions.changeLoading(data)),
    getRequest: (row, controller, token) => dispatch(httpActions.getRequest(row, controller, token))
  }
};

export default connect(mapStateToProps, mapDispatchToProps, null)(Home);