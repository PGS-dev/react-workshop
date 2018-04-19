import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';
import { Formik } from 'formik';

import { auth } from '../../../firebase';

const StyledForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const propTypes = {
  location: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

function Login({ location, isAuthenticated }) {
  const { from } = location.state || { from: { pathname: '/' } };

  if (isAuthenticated) {
    return <Redirect to={from} />;
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        auth.signInWithEmailAndPassword(values.email, values.password).then(
          () => setSubmitting(false),
          (error) => {
            const { code, message } = error;
            const global = code === 'auth/wrong-password' ? 'Wrong password' : message;
            setSubmitting(false);
            setErrors({ global });
          },
        );
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <StyledForm onSubmit={handleSubmit}>
          <Typography color="error" variant="subheading">
            {errors.global}
          </Typography>
          <TextField
            label="Email"
            name="email"
            fullWidth
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            margin="normal"
            error={touched.email && !!errors.email}
            helperText={touched.email && errors.email}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            margin="normal"
            error={touched.password && !!errors.password}
            helperText={touched.password && errors.password}
          />
          <Button type="submit" variant="raised" color="primary" fullWidth disabled={isSubmitting}>
            Login
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
}

Login.propTypes = propTypes;
export default Login;
