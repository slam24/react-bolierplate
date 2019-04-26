import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Button, Modal } from 'react-bootstrap'
import { renderField } from '../../utils/renderFields'
import { reset, reduxForm, Field, change } from 'redux-form'

let ModalForm = props => {

  const { handleSubmit, reset } = props;

  return <form onSubmit={handleSubmit} className="form">
    <div className="row">
      <div className="col-md-12">
        <Field name="name" component={renderField} required="true" type="text" placeholder="Write the name" label="Name"/>

        <Field name="phone" component={renderField} required="true" type="text" placeholder="Write the phone" label="Phone"/>
      </div>
    </div>

    <button id="resetModalForm" type="button" onClick={reset} style={{ visibility: 'hidden' }}>
      reset
    </button>

    <button id="SubmitModalForm" className="btn btn-primary" style={{ padding: '6px 12px', float: 'right', visibility: 'hidden' }}>Guardar</button>

  </form>;
};

const validateModalForm = val => {
  const errors = {};
  if (!val.name) {
    errors.name = 'This field is required';
  }

  if (!val.phone) {
    errors.phone = 'This field is required';
  }

  return errors;
};

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleShow(row = null) {
    this.setState({ show: true, type: 1 });
    if (row) {
      this.setState({ type: 2 });
      this.props.changeFieldValue('name', row.name)
      this.props.changeFieldValue('phone', row.phone)
      console.log(row)
    }
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleSubmit(values){
    console.log(values)
    if (this.state.type == 1) {
      document.getElementById("resetModalForm").click();
    }
  }

  save(){
    document.getElementById("SubmitModalForm").click();
  }

  render() {
    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose.bind(this)} backdrop='static'>
          <Modal.Header closeButton>
            <Modal.Title><strong>Form</strong></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ModalForm onSubmit={this.handleSubmit.bind(this)}/>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-success" onClick={this.save.bind(this)}>Save</Button>
            <Button className="btn btn-warning" onClick={this.handleClose.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

ModalForm = reduxForm({
  form: 'modalForm',
  validate: validateModalForm,
})(ModalForm);

const mapDispatchToProps = dispatch => {
  return {
    changeFieldValue: (field, value) => dispatch(change('modalForm', field, value)),
  }
};

export default connect(
  null,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(Form);