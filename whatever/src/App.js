import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import { Header } from './modules/layout';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: deepOrange,
  },
});

class App extends Component {
  constructor() {
    super();

    this.state = {
      userEmail: 'maximr@max.pl'
    }
  }
  render() {
    return (
      <MuiThemeProvider theme={darkTheme}>
      <Header userEmail={this.state.userEmail} />
        <div className="App"></div>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
