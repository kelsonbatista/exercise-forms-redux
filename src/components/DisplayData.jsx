import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class DisplayData extends Component {
  render() {
    const {
      personalData: { name, cpf, address },
      professionalData: { company, role, period },
    } = this.props;

    return (
      <div className='display'>
        <div>Nome: { name }</div> 
        <div>CPF: { cpf }</div>
        <div>Endereço: { address }</div>
        <div>Empresa: { company }</div>
        <div>Cargo: { role }</div>
        <div>Período: { period }</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    personalData: state.reducer.personalData,
    professionalData: state.reducer.professionalData,
  }
}

DisplayData.propTypes = {
  personalData: PropTypes.instanceOf(Object),
  professionalData: PropTypes.instanceOf(Object),
}.isRequired;

export default connect(mapStateToProps, null)(DisplayData);
