import {
  PAGAMENTO_CONCLUIDO,
  MODIFICA_PAGAR_CASA,
  FETCH_USERS,
  MODIFICA_VALOR_NOVO_GASTO,
  MODIFICA_REF_NOVO_GASTO,
  MODIFICA_LAST_NOVO_GASTO
} from '../actions/types';

const INITIAL_STATE = {
  valorPagarCasa: '',
  users: [],
  valorNovoGasto: '',
  refNovoGasto: '',
  lastNovoGasto: ''
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
    case MODIFICA_VALOR_NOVO_GASTO:
      return {
        ...state,
        valorNovoGasto: action.payload
      };
    case MODIFICA_REF_NOVO_GASTO:
      return {
        ...state,
        refNovoGasto: action.payload
      };
    case MODIFICA_LAST_NOVO_GASTO:
      return {
        ...state,
        lastNovoGasto: action.payload
      };
    default:
      return state;
  }
};
