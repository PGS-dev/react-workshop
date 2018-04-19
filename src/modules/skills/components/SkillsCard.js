import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CardImage = styled.div`
  background: url('https://cdn-images-1.medium.com/max/800/0*QKJemZKR6vA6hMAj.png');
  background-repeat: no-repeat;
  background-position: 30% 90%;
  opacity: 0.1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: 10;
  transition: 0.2s opacity;

  &:hover {
    opacity: 0.2;
  }
`;

const Card = styled(Paper)`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  transition: 0.2s background-color;
  cursor: pointer;
  position: relative;
  padding: 10px;

  &:hover {
    background-color: rgba(66, 66, 66, 0.8);
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & p {
    width: 50%;
    text-align: center;
  }
`;

const propTypes = {
  id: PropTypes.string.isRequired,
  values: PropTypes.objectOf(PropTypes.string).isRequired,
};

function SkillsCard({ id, values }) {
  const { name, lastName, HTML5, CSS, JavaScript, ReactJS } = values;

  return (
    <StyledLink to={`/result/${id}`}>
      <Card>
        <Typography variant="headline" align="center">
          {name} {lastName}
        </Typography>
        <SkillsContainer>
          <Typography>HTML: {HTML5}</Typography>
          <Typography>CSS: {CSS}</Typography>
          <Typography>JS: {JavaScript}</Typography>
          <Typography>ReactJS: {ReactJS}</Typography>
        </SkillsContainer>
        <CardImage />
      </Card>
    </StyledLink>
  );
}
SkillsCard.propTypes = propTypes;
export default SkillsCard;
