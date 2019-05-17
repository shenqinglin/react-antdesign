import React from 'react';
import ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
import Route from './router/'
// import {Provider} from 'react-redux';
// import store from '@store/store';
import * as serviceWorker from './serviceWorker';

const render = Component => {
  ReactDOM.render(
    // <Provider store={store}>

    // </Provider>, 
    
    <Component />,
    
    document.getElementById('root'));
}
render(Route)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
if (module.hot) {
  module.hot.accept('./router/', () => {
    render(Route);
  })
}
serviceWorker.unregister();
