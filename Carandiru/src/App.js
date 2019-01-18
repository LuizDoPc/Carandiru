import React, { Component } from 'react';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

class App extends Component {
  constructor(props) {
    super(props);

    var config = {
      apiKey: 'AIzaSyCTbdiFDJI9I480gEfH6fbtqDUJgfrmkHA',
      authDomain: 'carandiru-9bd09.firebaseapp.com',
      databaseURL: 'https://carandiru-9bd09.firebaseio.com',
      projectId: 'carandiru-9bd09',
      storageBucket: '',
      messagingSenderId: '736691262633'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
