import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Header } from './modules/layout';
import { SkillsList } from './modules/skills';

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
      data: [
        {
          name: 'john',
          lastName: 'jan',
          HTML5: '200',
          CSS: '200',
          JavaScript: '200',
          React: '200',
        },
        {
          name: 'john',
          lastName: 'jan',
          HTML5: '200',
          CSS: '200',
          JavaScript: '200',
          React: '200',
        },
      ],
    };
  }

  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Header userEmail="maciek@maciek.pl" />
        <StyledMain>
          <SkillsList data={this.state.data} />
        </StyledMain>
      </Fragment>
    );
  }
}

export default App;
