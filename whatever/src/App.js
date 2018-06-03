import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: deepOrange,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={darkTheme}>
        <div className="App">
        </div>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
