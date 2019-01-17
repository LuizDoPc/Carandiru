import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import { MODIFICA_EMAIL, MODIFICA_SENHA, LOGIN_USUARIO_SUCESSO, LOGIN_USUARIO_ERRO, LOGIN_EM_ANDAMENTO } from './types';

export const modificaEmail = texto => {
  return {
    type: MODIFICA_EMAIL,
    payload: texto
  };
};

export const modificaSenha = texto => {
  return {
    type: MODIFICA_SENHA,
    payload: texto
  };
};

export const autenticarUsuario = ({ email, senha }) => {
  return dispatch => {
    dispatch({
      type: LOGIN_EM_ANDAMENTO
    });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(value => {
        let uid = value.user.uid;
        firebase
          .database()
          .ref('/users/' + uid)
          .once('value')
          .then(snapshot => {
            let userData = { uid, dadosUsuario: snapshot.val() };

            const monthNames = [
              'Janeiro',
              'Fevereiro',
              'Marco',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro'
            ];
            const d = new Date();

            let path = '/casa/entradas/' + d.getFullYear() + '/' + monthNames[d.getMonth()];

            firebase
              .database()
              .ref(path)
              .on('value', snapshot => {
                var result = _.values(snapshot.val());

                var total = 0;

                result.map(reg => {
                  if (reg.uid == uid) {
                    total += parseFloat(reg.valor);
                  }
                });

                var data = { userData, pago: total };
                dispatch({
                  type: LOGIN_USUARIO_SUCESSO,
                  payload: data
                });
              });
          });

        Actions.principal();
      })
      .catch(erro => loginUsuarioErro(erro, dispatch));
  };
};

const loginUsuarioErro = (erro, dispatch) => {
  dispatch({
    type: LOGIN_USUARIO_ERRO,
    payload: erro.message
  });
};
