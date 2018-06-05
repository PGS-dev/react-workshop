import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const StyledHeader = styled(Paper)`
  && {
    background-color: rgba(33, 33, 33, 0.8);
    position: fixed;
    width: 100%;
    z-index: 1000;
  }
`;

const Container = styled.div`
  padding: 10px;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTitle = styled(Typography)`
  background: -webkit-linear-gradient(135deg, #f05a28 0%, #e80a89 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledUsername = styled(Typography)`
  && {
    margin-left: auto;
    padding-right: 20px;
  }
`;

const propTypes = {
  userEmail: PropTypes.string,
};

function Header({ userEmail }) {
  return (
    <StyledHeader square component="header">
      <Container>
        <StyledTitle variant="headline">React Workshop</StyledTitle>
        {userEmail && (
          <StyledUsername variant="subheading">Hi, {userEmail.split('@')[0]}!</StyledUsername>
        )}
      </Container>
    </StyledHeader>
  );
}

Header.propTypes = propTypes;
export default Header;
