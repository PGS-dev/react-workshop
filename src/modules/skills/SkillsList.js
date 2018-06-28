import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

const propTypes = {
  handleAddItem: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.string),
};

function SkillsList({ data, handleAddItem }) {
  return (
    <React.Fragment>
      <SearchContainer>
        <AddSkills handleAddItem={handleAddItem} />
      </SearchContainer>
      <ListContainer>{data.map(p => <SkillsCard key={p.id} values={p} />)}</ListContainer>
    </React.Fragment>
  );
}

SkillsList.propTypes = propTypes;
export default SkillsList;
