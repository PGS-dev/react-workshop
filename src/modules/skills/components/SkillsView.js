import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';

import HTTP from '../../../apiConfig';
import SkillsRadar from './SkillsRadar2';
import SkillsForm from './SkillsForm';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  match: PropTypes.shape({ params: PropTypes.objectOf(PropTypes.string) }).isRequired,
  history: PropTypes.object.isRequired,
};

class SkillsView extends Component {
  state = null;

  componentDidMount() {
    HTTP.getItem(this.props.match.params.id).then(response => this.setState({ ...response.data }));
  }

  mapData = () => {
    const { name, lastName, ...data } = this.state;
    return data;
  };

  handleTextField = e => this.setState({ [e.target.name]: e.target.value || 0 });

  handleSubmit = (e) => {
    e.preventDefault();
    const { open, ...data } = this.state;
    HTTP.editItem(this.props.match.params.id, data);
  };

  handleDelete = () =>
    HTTP.deleteItem(this.props.match.params.id).then(() => this.props.history.push('/'));

  render() {
    return this.state ? (
      <React.Fragment>
        <StyledTitle variant="display4">
          {this.state.name} {this.state.lastName}
        </StyledTitle>
        <Container>
          <ItemContainer width={30}>
            <SkillsForm
              handleSubmit={this.handleSubmit}
              handleTextField={this.handleTextField}
              values={this.state}
              secondBtnFn={this.handleDelete}
              secondBtnLabel="Delete"
              isColumn
            />
          </ItemContainer>
          <ItemContainer width={70}>
            <SkillsRadar data={this.mapData()} />
          </ItemContainer>
        </Container>
      </React.Fragment>
    ) : (
      <Container>
        <CircularProgress size={100} thickness={2} />
      </Container>
    );
  }
}

SkillsView.propTypes = propTypes;
export default SkillsView;
