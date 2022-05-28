import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = (e) => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    longitude: '',
    latitude:'',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

    const handleChange2 = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: parseFloat(value),
      });
  };
   
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
        
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-XS-10">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />

                <input
                  className="form-input"
                  placeholder="Longitude"
                  name="longitude"
                  type="number"
                  value={formState.longitude}
                  onChange={handleChange2}
                />

                <input
                  className="form-input"
                  placeholder="Latitude"
                  name="latitude"
                  type="number"
                  value={formState.latitude}
                  onChange={handleChange2}
                />

                <input
                  className="form-input"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn-block btn-default btn button_submit"
                  type="submit"
                >
                  SIGN UP
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
    </main>
  );
};

export default Signup;
