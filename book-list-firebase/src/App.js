import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import firebase from './firebase/firebase';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props) {
    super(props);

    this.auth = firebase.auth();

    this.state = {
      user: null,
      loading: true,
    };
  }

  componentDidMount() {
    this.auth.onAuthStateChanged((user) => {
      this.setState({ user: user, loading: false });
    });
  }

  render() {
    const { user, loading } = this.state;

    return (
      <BrowserRouter>

      <Navbar user={user} />

      {loading ?
          <div>Loading</div> :
          <div>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </div>
      }

    </BrowserRouter>
    );
  }
}

export default App;
