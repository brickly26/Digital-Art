import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const LoginStyles = styled.nav`
  .card {
    margin: 5%;
  }
  input {
    margin-top: 3px;
    display: block;
    width: 100%
  }
  label {
    display: block;
    margin-top: 15px;
  }
  .button {
    margin-top: 20px;
    margin-right: 20px;
  }
`;

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <LoginStyles>
      <main className="flex-row justify-center mb-4">
        <div className="col-12 col-lg-10">
          <div className="card">
            <h2 className="card-header bg-dark text-light p-2">Login</h2>
            <div className="card-body">
              {data ? (
                <p>
                  Success! You may now head{' '}
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <label>Email:</label>
                  <input
                    className="form-input"
                    placeholder="eggsNbenny@gmail.com"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <label>Password:</label>
                  <input
                    className="form-input"
                    placeholder="**********"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <button
                    className="button button-shadow button-primary"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                  >
                    Submit
                  </button>
                  
                  <Link className="button button-shadow" to="/signup">Sign Up</Link>

                </form>
              )}

              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </LoginStyles>
  );
};

export default Login;
