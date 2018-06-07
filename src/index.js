import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: deepOrange,
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
