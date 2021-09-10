import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import App from './App';
import store from './redux';

const engine = new Styletron();
ReactDOM.render(
  <Provider store={store}>

    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <App />
      </BaseProvider>
    </StyletronProvider>
  </Provider>, document.getElementById('root')
);
