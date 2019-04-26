import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const renderField = ({ input, label, type, required, placeholder, meta: { touched, error, warning } }) => (
  <div className={classnames('form-group', { 'has-error': touched && error })}>
    <label className="control-label">{label}</label><span style={{ color: 'red' }}> { required ? '*' : '' }</span>
    <input className="form-control" {...input} placeholder={placeholder} type={type}/>
    {touched && ((error && <span className="help-block">{error}</span>) || (warning && <span className="help-block">{warning}</span>))}
  </div>
)

renderField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.string,
  placeHolder: PropTypes.string
}
