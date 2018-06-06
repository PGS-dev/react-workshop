import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NamesField = styled(TextField)`
  flex: 0.45;
`;

const SkillsField = styled(TextField)`
  flex: 0.2;
  & input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const Container = styled.div`
  display: flex;
  ${p => p.isColumn && 'flex-direction: column'};
  justify-content: space-around;
`;

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleTextField: PropTypes.func.isRequired,
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  secondBtnFn: PropTypes.func.isRequired,
  secondBtnLabel: PropTypes.string.isRequired,
  isColumn: PropTypes.bool,
};

function SkillsForm({
  handleSubmit,
  handleTextField,
  values,
  secondBtnFn,
  secondBtnLabel,
  isColumn,
}) {
  const { name, lastName, HTML5, CSS, JavaScript, ReactJS } = values;

  return (
    <form id="skillsForm" onSubmit={handleSubmit}>
      <Container isColumn={isColumn}>
        <NamesField
          margin="dense"
          name="name"
          label="Name"
          onChange={handleTextField}
          value={name}
        />
        <NamesField
          margin="dense"
          name="lastName"
          label="Last Name"
          onChange={handleTextField}
          value={lastName}
        />
      </Container>
      <Container isColumn={isColumn}>
        <SkillsField
          margin="dense"
          name="HTML5"
          label="HTML5"
          type="number"
          onChange={handleTextField}
          value={HTML5}
        />
        <SkillsField
          margin="dense"
          name="CSS"
          label="CSS"
          type="number"
          onChange={handleTextField}
          value={CSS}
        />
        <SkillsField
          margin="dense"
          name="JavaScript"
          label="JavaScript"
          type="number"
          onChange={handleTextField}
          value={JavaScript}
        />
        <SkillsField
          margin="dense"
          name="ReactJS"
          label="ReactJS"
          type="number"
          onChange={handleTextField}
          value={ReactJS}
        />
      </Container>
      <Container isColumn={isColumn}>
        <Button color="primary" type="submit" fullWidth>
          Save
        </Button>
        <Button onClick={secondBtnFn} color="primary" fullWidth>
          {secondBtnLabel}
        </Button>
      </Container>
    </form>
  );
}
SkillsForm.propTypes = propTypes;

export default SkillsForm;