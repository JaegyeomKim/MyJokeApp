import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <a href="/">Dad Joke</a>
          <a href="/Projects">Project</a>
          <a href="/aboutMe">About Me</a>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
