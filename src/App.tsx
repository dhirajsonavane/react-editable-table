import React from 'react';
import UserList from './views/UserList';
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/esm/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LinkedInIcon from './component/LinkedInIcon';
import GithubIcon from './component/GithubIcon';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar bg="dark" sticky="top">
          <Navbar.Brand href="/">
            <img src={process.env.PUBLIC_URL + '/logo.png'} width="50" />
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="https://www.linkedin.com/in/dhirajsonavane/" target="_blank">
              <LinkedInIcon />
            </Nav.Link>
            <Nav.Link href="https://github.com/dhirajsonavane" target="_blank">
              <GithubIcon />
            </Nav.Link>
          </Nav>
        </Navbar>
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
