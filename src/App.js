import React, { useState } from 'react';
import './App.scss';
import Login from './components/Login/Login';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';

import { AuthContext } from './context/auth';
import { CommentsContext } from './context/comments';
import PrivateRoute from './PrivateRoute';
import SinglePost from './components/Dashboard/Content/Posts/SinglePost/SinglePost';

function App() {
  const token = localStorage.getItem('token');
  const [authToken, setAuthToken] = useState(token);
  const [comments, setComments] = useState([]);

  const setToken = (data) => {
    localStorage.setItem('token', data);
    setAuthToken(data);
  };

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken: setToken }}>
      <CommentsContext.Provider value={{ comments, setComments }}>
        <Router>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/dashboard/:page" component={Dashboard} />
          <PrivateRoute path="/post/:id" component={SinglePost} />
        </Router>
      </CommentsContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
