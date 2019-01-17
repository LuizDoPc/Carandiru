import { PAGAMENTO_CONCLUIDO, MODIFICA_PAGAR_CASA, FETCH_USERS } from '../actions/types';

const INITIAL_STATE = {
  valorPagarCasa: '',
  users: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_PAGAR_CASA:
      return {
        ...state,
        valorPagarCasa: action.payload
      };
    case PAGAMENTO_CONCLUIDO:
      return {
        ...state,
        valorPagarCasa: ''
      };
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};
