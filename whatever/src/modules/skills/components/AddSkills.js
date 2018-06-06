import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import SkillsForm from './SkillsForm';

const StyledButton = styled(Button)`
  && {
    margin-left: 20px;
  }
`;

const propTypes = {
  handleAddItem: PropTypes.func.isRequired,
};

class AddSkills extends Component {
  state = {
    open: false,
    name: '',
    lastName: '',
    JavaScript: '',
    ReactJS: '',
    CSS: '',
    HTML5: '',
  };

  handleOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ open: false });

  handleTextField = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleClose();
    const { open, ...data } = this.state;
    this.props.handleAddItem(data);
  };

  render() {
    return (
      <React.Fragment>
        <StyledButton onClick={this.handleOpen} color="primary" variant="raised">
          Add new
        </StyledButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add new result</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please provide correct Pluralsight certifications results below
            </DialogContentText>
            <SkillsForm
              handleSubmit={this.handleSubmit}
              handleTextField={this.handleTextField}
              values={this.state}
              secondBtnFn={this.handleClose}
              secondBtnLabel="Cancel"
            />
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}
AddSkills.propTypes = propTypes;

export default AddSkills;