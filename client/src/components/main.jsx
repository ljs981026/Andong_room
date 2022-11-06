import React from 'react';
import { Link } from 'react-router-dom';


class Main extends React.Component {
  render() {
    return(
      <div>
        <h2>안녕하세요</h2>
        <ul>
          <Link to="/room/sol"><li>솔뫼</li></Link>
          <Link to="/room/non"><li>논골</li></Link>
        </ul>
      </div>
    )
  }
}

export default Main;