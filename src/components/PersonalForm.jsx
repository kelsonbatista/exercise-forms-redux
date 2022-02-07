import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addPersonalData } from '../store/actions';
import { connect } from 'react-redux';

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      cpf: '',
      address: '',
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    const { history, dispatchPersonalData } = this.props;
    dispatchPersonalData(this.state);
    history.push('/professional');
  }

  render() {
    return (
      <div className='personal'>
        <label htmlFor='name'>
          Nome:
          <input type='text' id='name' name='name' onChange={ this.handleChange } />
        </label>
        <label htmlFor='cpf'>
          CPF:
          <input type='text' id='cpf' name='cpf' onChange={ this.handleChange } />
        </label>
        <label htmlFor='address'>
          Endereço:
          <input type='text' id='address' name='address' onChange={ this.handleChange } />
        </label>
        <button type="button" onClick={ this.handleSubmit }>Enviar</button>
      </div>
    );
  }
}

PersonalForm.propTypes = {
  history: PropTypes.instanceOf(Object),
  dispatchPersonalData: PropTypes.string,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchPersonalData: (state) => dispatch(addPersonalData(state)),
});

export default connect(null, mapDispatchToProps)(PersonalForm);
