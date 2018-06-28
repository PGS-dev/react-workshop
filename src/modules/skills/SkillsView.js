import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import SkillsForm from './SkillsForm';
import SkillsRadar from './SkillsRadar';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: ${p => `${p.width}%`};
`;

const StyledTitle = styled(Typography)`
  && {
    background: -webkit-linear-gradient(135deg, #f05a28 0%, #e80a89 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 500;
    text-align: center;
  }
`;

const propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  match: PropTypes.shape({ params: PropTypes.objectOf(PropTypes.string) }).isRequired,
  // history: PropTypes.object.isRequired,
};

class SkillsView extends Component {
  state = this.props.data.find(d => d.id === this.props.match.params.id);
  mapData = () => {
    const { name, lastName, id, ...data } = this.state;
    return data;
  };

  handleTextField = e => this.setState({ [e.target.name]: e.target.value || 0 });

  render() {
    const { name, lastName } = this.state;
    return (
      <React.Fragment>
        <StyledTitle variant="display4">
          {name} {lastName}
        </StyledTitle>
        <Container>
          <ItemContainer width={25}>
            <SkillsForm
              handleSubmit={this.handleSubmit}
              handleTextField={this.handleTextField}
              values={this.state}
              secondBtnFn={this.handleDelete}
              secondBtnLabel="Delete"
              isColumn
            />
          </ItemContainer>
          <ItemContainer width={75}>
            <SkillsRadar data={this.mapData()} />
          </ItemContainer>
        </Container>
      </React.Fragment>
    );
  }
}

SkillsView.propTypes = propTypes;
export default SkillsView;
