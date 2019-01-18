import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import {
  MODIFICA_PAGAR_CASA,
  PAGAMENTO_CONCLUIDO,
  FETCH_USERS,
  MODIFICA_VALOR_NOVO_GASTO,
  MODIFICA_REF_NOVO_GASTO,
  MODIFICA_LAST_NOVO_GASTO
} from './types';

export const pagarCasa = (valor, uid) => {
  console.log(valor + ' / ' + uid);
  if (!valor)
    return {
      type: ''
    };
  return dispatch => {
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
    console.log(path);
    firebase
      .database()
      .ref(path)
      .push({
        tipo: 'PAGAMENTO_MORADOR',
        uid: uid,
        valor: valor,
        dia: d.getDate()
      })
      .then(() => {
        dispatch({
          type: PAGAMENTO_CONCLUIDO
        });
      })
      .catch(erro => alert(erro));
  };
};

export const modificaPagarCasa = texto => {
  return {
    type: MODIFICA_PAGAR_CASA,
    payload: texto
  };
};

export const fetchMoradores = () => {
  return dispatch => {
    firebase
      .database()
      .ref('/users')
      .on('value', snapshot => {
        var res = _.values(snapshot.val());
        dispatch({
          type: FETCH_USERS,
          payload: res
        });
      });
  };
};

export const modificaValorNovoGasto = texto => {
  return {
    type: MODIFICA_VALOR_NOVO_GASTO,
    payload: texto
  };
};

export const modificaRefNovoGasto = texto => {
  return {
    type: MODIFICA_REF_NOVO_GASTO,
    payload: texto
  };
};

export const modificaLastNovoGasto = texto => {
  return {
    type: MODIFICA_LAST_NOVO_GASTO,
    payload: texto
  };
};

export const novoGasto = (valor, ref, last) => {
  return dispatch => {
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

    let path = '/casa/saidas/' + d.getFullYear() + '/' + monthNames[d.getMonth()];

    let li = monthNames.indexOf(last);

    for (let i = d.getMonth(); i != li + 1; i++) {
      path = '/casa/saidas/' + d.getFullYear() + '/' + monthNames[i];

      firebase
        .database()
        .ref(path)
        .push({
          tipo: 'GASTO_TEMPORARIO',
          valor,
          ultima_parcela: last
        })
        .then(() => {
          Actions.money();
        });
    }
    dispatch({
      type: ''
    });
  };
};
