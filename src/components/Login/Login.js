import React, { useState } from 'react';
import styles from './Login.module.scss';
import cx from 'classnames';
import { useAuth } from '../../context/auth';
import { Redirect } from 'react-router-dom';

import authRestService from './authRestService';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const { setAuthToken } = useAuth();

  const onLoginChange = (e) => {
    const value = e.target.value.trim();

    setLogin(value);
  };

  const onPasswordChange = (e) => {
    const value = e.target.value.trim();

    setPassword(value);
  };

  const handleLogin = () => {
    authRestService
      .logIn(login, password)
      .then((response) => {
        const { data } = response;

        if (data.code === 200) {
          setError(false);
          setAuthToken(data.data.token);
          setIsLogged(true);
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        setError(true);
        console.log('error', error);
      });
  };

  return !isLogged ? (
    <div className="container has-text-centered">
      <h1 className={cx('title', styles.loginTitle)}>Simple Web App</h1>
      <div className={styles.loginContainer}>
        <div className={styles.loginForm}>
          <input
            type="text"
            placeholder="Username"
            onChange={onLoginChange}
            className={styles.loginInput}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={onPasswordChange}
            className={styles.loginInput}
          />
          <button
            className={cx('button', styles.loginButton)}
            onClick={handleLogin}
          >
            Login
          </button>
          {error && (
            <p className={styles.error}>
              Login or password is invalid. Please, try again.
            </p>
          )}
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/dashboard/1" />
  );
};

export default Login;
