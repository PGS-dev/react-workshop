import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Route from 'react-router-dom/Route';
import styled from 'styled-components';

import { auth } from './firebase';
import { Header } from './modules/layout';
import { Login, PrivateRoute } from './modules/auth';
import { SkillsList, SkillsView } from './modules/skills';

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
      userEmail: null,
      isAuthFinished: false,
    };
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        auth.currentUser.getIdToken(true).then((token) => {
          // HTTP.setDefaults(user.uid, token);
          this.setState({ isAuthFinished: true, userEmail: user.email });
        });
      } else {
        this.setState({ isAuthFinished: true, userEmail: null });
      }
    });
  }

  handleAddItem(data) {
    this.setState({ data: [...this.state.data, data] });
  }

  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Header userEmail={this.state.userEmail} />
        {this.state.isAuthFinished ? (
          <StyledMain>
            <PrivateRoute
              path="/"
              exact
              data={this.state.data}
              isAuthenticated={!!this.state.userEmail}
              handleAddItem={this.handleAddItem}
              component={SkillsList}
            />
            <PrivateRoute
              exact
              path="/result/:id"
              isAuthenticated={!!this.state.userEmail}
              component={SkillsView}
              data={this.state.data}
            />
            <Route
              path="/login"
              render={({ location }) => (
                <Login location={location} isAuthenticated={!!this.state.userEmail} />
              )}
            />
          </StyledMain>
        ) : null}
      </Fragment>
    );
  }
}

export default App;
