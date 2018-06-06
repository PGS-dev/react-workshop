import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import { Header } from './modules/layout';
import { SkillCard, AddSkills } from './modules/skills'; 
import styled from 'styled-components';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: deepOrange,
  },
});

const StyledMain = styled.main`
  padding: 60px 10px 10px;
  margin: 0 auto;
  max-width: 1080px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      userEmail: 'maximr@max.pl',
      values: [
        {
          name: 'Maxim', 
          lastName: 'Rachkovskiy', 
          HTML5: '123', 
          CSS: '234', 
          JavaScript: '345', 
          ReactJS: '456'
        },{
          name: 'Jan', 
          lastName: 'Kowalski', 
          HTML5: '122', 
          CSS: '233', 
          JavaScript: '344', 
          ReactJS: '455'
        }
      ]
    }
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleAddItem(values) {
    this.setState({ values: [...this.state.values, values] });
  }

  render() {
    return (
      <MuiThemeProvider theme={darkTheme}>
        <Header userEmail={this.state.userEmail} />
        <StyledMain>
          <AddSkills handleAddItem={this.handleAddItem} />
          {this.state.values.map(v => <SkillCard values={v} />)}
        </StyledMain>
      </MuiThemeProvider>
    );
  }
}

export default App;
