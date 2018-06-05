import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import styled from 'styled-components';
import { Header } from './modules/layout';
import { SkillsCard, AddSkills, SkillsList } from './modules/skills';

const StyledMain = styled.main`
  padding: 60px 10px 10px;
  margin: 0 auto;
  max-width: 1080px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleAddItem(data) {
    this.setState({ data: [...this.state.data, data] });
  }

  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Header userEmail="maciek@maciek.pl" />
        <StyledMain>
          <SkillsList data={this.state.data} handleAddItem={this.handleAddItem} />
        </StyledMain>
      </Fragment>
    );
  }
}

export default App;
