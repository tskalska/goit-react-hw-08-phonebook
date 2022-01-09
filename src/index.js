import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {persistor, store} from './redux/store';
import {BrowserRouter} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App'; 



// import {PersistGate} from 'redux-persist/integration/react'



// ReactDOM.render(
//   // <React.StrictMode>
//     {/* <Provider store={store}> */}
//       {/* <PersistGate loading={null} persistor={store.persistedStore}> */}
//         <App />
//       {/* </PersistGate> */}
//     {/* </Provider> */}
//   // </React.StrictMode>,
//   // document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

