import {
  MODIFICA_EMAIL,
  MODIFICA_SENHA,
  LOGIN_USUARIO_SUCESSO,
  LOGIN_USUARIO_ERRO,
  LOGIN_EM_ANDAMENTO,
  MODIFICA_PAGAR_CASA
} from '../actions/types';

const INITIAL_STATE = {
  email: 'sarrada@carandiru.com',
  senha: '123456',
  erroLogin: '',
  loadingLogin: '',
  uid: '',
  nome: '',
  foto: '',
  periodo: '',
  pago: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_EMAIL:
      return { ...state, email: action.payload };
    case MODIFICA_SENHA:
      return { ...state, senha: action.payload };
    case LOGIN_USUARIO_ERRO:
      return {
        ...state,
        erroLogin: action.payload,
        loadingLogin: false,
        senha: ''
      };
    case LOGIN_USUARIO_SUCESSO:
      return {
        ...state,
        loadingLogin: false,
        email: '',
        senha: '',
        uid: action.payload.userData.uid,
        nome: action.payload.userData.dadosUsuario.nome,
        foto: action.payload.userData.dadosUsuario.foto,
        periodo: action.payload.userData.dadosUsuario.periodo,
        pago: action.payload.pago
      };
    case LOGIN_EM_ANDAMENTO:
      return { ...state, loadingLogin: true };
    default:
      return state;
  }
};
