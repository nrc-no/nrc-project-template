import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { NativeBaseProvider } from 'native-base';
import { theme } from 'core-design-system';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import { App } from './App';
import { store } from './store';
import reportWebVitals from './reportWebVitals';

const GlobalStyles = createGlobalStyle`
  /* These styles make the body full-height */
  html, body { height: 100%; }
  /* These styles disable body scrolling if you are using <ScrollView> */
  body { overflow: hidden; }
  /* These styles make the root element full-height */
  #root { display:flex; height:100%; }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <BrowserRouter>
          <>
            <App />
            <GlobalStyles />
          </>
        </BrowserRouter>
      </NativeBaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
