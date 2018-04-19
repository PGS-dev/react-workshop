import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';

import HTTP from '../../../apiConfig';
import SkillsCard from './SkillsCard';
import AddSkills from './AddSkills';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 20px 50px 30px;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledTextField = styled(TextField)`
  flex: 1;
`;

class List extends Component {
  state = {
    data: null,
    filter: '',
  };

  componentDidMount() {
    HTTP.get('').then(response => this.setState({ data: response.data }));
  }

  handleTextField = e => this.setState({ filter: e.target.value });

  handleAddItem = (key, data) => this.setState({ data: { ...this.state.data, [key]: data } });

  render() {
    const { filter, data } = this.state;
    return (
      <React.Fragment>
        <SearchContainer>
          <StyledTextField label="Search" onChange={this.handleTextField} value={filter} />
          <AddSkills handleAddItem={this.handleAddItem} />
        </SearchContainer>
        <ListContainer>
          {data &&
            Object.keys(data)
              .filter(key => data[key].name.toLowerCase().indexOf(filter) >= 0)
              .map(key => <SkillsCard key={key} id={key} values={data[key]} />)}
        </ListContainer>
      </React.Fragment>
    );
  }
}

export default List;
