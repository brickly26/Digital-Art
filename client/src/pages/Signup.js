import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const SignupStyles = styled.nav`
  .card {
    margin: 5%;
  }
  input {
    margin-top: 3px;
    display: block;
    width: 100%;
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

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          username: formState.username,
        },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SignupStyles>
      <main className="flex-row justify-center mb-4">
        <div className="col-12 col-lg-10">
          <div className="card">
            <h2 className="card-header bg-dark text-light p-2">Sign Up</h2>
            <div className="card-body">
              {data ? (
                <p>
                  Success! You may now head{' '}
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <label>Username</label>
                  <input
                    className="form-input"
                    placeholder="Benjamin"
                    name="username"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                  />
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
                    placeholder="******"
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
                    Sign Up!
                  </button>

                  <Link className="button button-shadow" to="/login">
                    Login
                  </Link>
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
    </SignupStyles>
  );
};

export default Signup;
