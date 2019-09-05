import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <style jsx>{`
        div {
          color: #F8F8F8;
        }
       `}</style>
      <h1></h1>
      <Link to="/">Home</Link> | <Link to="/">Following</Link> | <Link to="/">UserName</Link> | <Link to="/">Inbox</Link> | <Link to="/">Notifications</Link> | <Link to="/">Settings</Link>
    </div>
  );
}

export default Header;