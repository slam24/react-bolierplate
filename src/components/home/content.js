//import
import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import DataActions from '../../actions/data'

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

  render() {

    return (
      <div>
        <button type="button" onClick={this.connectAction.bind(this)}>Conectar action</button> 
      </div>
    );
  }
}

Home.propTypes = {
  loading: PropTypes.func.isRequired,
  getData: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    getData: state.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loading: () => dispatch(DataActions.loading()),
    changeLoading: () => dispatch(DataActions.changeLoading()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps, null)(Home);