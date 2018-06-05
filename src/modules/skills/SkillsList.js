import React from 'react';
import styled from 'styled-components';

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

function SkillsList({ data, handleAddItem }) {
  return (
    <React.Fragment>
      <SearchContainer>
        <AddSkills handleAddItem={handleAddItem} />
      </SearchContainer>
      <ListContainer>{data.map(p => <SkillsCard key={p.lastName} values={p} />)}</ListContainer>
    </React.Fragment>
  );
}

export default SkillsList;
