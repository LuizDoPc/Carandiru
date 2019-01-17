import { PAGAMENTO_CONCLUIDO, MODIFICA_PAGAR_CASA } from '../actions/types';

const INITIAL_STATE = {
  valorPagarCasa: ''
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
    default:
      return state;
  }
};
