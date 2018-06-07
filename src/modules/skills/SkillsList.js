import React from 'react';
import styled from 'styled-components';

import SkillsCard from './SkillsCard';

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

function SkillsList({ data }) {
  return (
    <React.Fragment>
      <ListContainer>{data.map(p => <SkillsCard key={p.lastName} values={p} />)}</ListContainer>
    </React.Fragment>
  );
}

export default SkillsList;
