import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore ,applyMiddleware} from 'redux';
import reducers from './app/Redux/reducer/index';
import ReduxThunk from 'redux-thunk' ;
import Rootstack from './app/RootStack/Routs';
import {I18nManager} from 'react-native';
I18nManager.forceRTL(false);
export default class App extends Component {
   render() {
     return (
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
      <Rootstack/>
    </Provider>
     );
   }
}
