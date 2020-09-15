import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Home from './components/Home';



function App() {

  return (
    <Router>
      <div className="container mt-5">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Post List</Link>
            </li>
            <li>
              <Link to="/add">Add post</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts" component={PostList} />
          <Route path="/add" component={PostForm} />
        </Switch>
      </div>
    </Router>

  );
};


export default App;
