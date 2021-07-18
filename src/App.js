import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './styles.css';
import MyProfile from './components/MyProfile';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <div className="display">
            <Route exact path="/" component={Home} />
            <Route path="/myprofile" component={MyProfile} />
            <Route path="/userprofile/:githubLogin" component={UserProfile} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
