import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addProfessionalData } from '../store/actions';
import { connect } from 'react-redux';

class ProfessionalForm extends Component {
  constructor() {
    super();

    this.state = {
      company: '',
      role: '',
      period: '',
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    const { history, dispatchProfessionalData } = this.props;
    dispatchProfessionalData(this.state);
    history.push('/display');
  }

  render() {
    return (
      <div className='professional'>
        <label htmlFor='company'>
          Empresa:
          <input type='text' id='company' name='company' onChange={ this.handleChange } />
        </label>
        <label htmlFor='role'>
          Cargo:
          <input type='text' id='role' name='role' onChange={ this.handleChange } />
        </label>
        <label htmlFor='period'>
          Período:
          <input type='text' id='period' name='period' onChange={ this.handleChange } />
        </label>
        <button type="button" onClick={ this.handleSubmit }>Enviar</button>
      </div>
    )
  }
}

ProfessionalForm.propTypes = {
  history: PropTypes.instanceOf(Object),
  dispatchProfessionalData: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchProfessionalData: (state) => dispatch(addProfessionalData(state)),
});

export default connect(null, mapDispatchToProps)(ProfessionalForm);
