import React from 'react';
import '../css/header.css'
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    function redirect() {
      const a = 1
      return a;
    }
    return(
      <header>
        <div className="menu-wrap">
          <div className="menu-bar">
            <ul>
              <li><Link to="/room/sol">솔뫼</Link></li>
              <li><Link to="/room/non">논골</Link></li>
              <li onClick={redirect()}><Link to="/around/food">식당</Link></li>
              <li onClick={redirect()}><Link to="/around/alchole">술집</Link></li>
              <li onClick={redirect()}><Link to="/around/play">놀거리</Link></li>
              <li onClick={redirect()}><Link to="/around/convinience">편의시설</Link></li>
              <li><Link to="/login">로그인</Link></li>
              <li>회원가입</li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;