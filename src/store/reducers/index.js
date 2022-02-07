import { combineReducers } from 'redux';

const INITIAL_STATE = {
  personalData: {},
  professionalData: {},
}

const reducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  switch(action.type) {
    case 'ADD_PERSONAL_DATA':
      return {
        ...state,
        personalData: action.payload,
      };
    case 'ADD_PROFESSIONAL_DATA':
      return {
        ...state,
        professionalData: action.payload,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ reducer });

export default rootReducer;
