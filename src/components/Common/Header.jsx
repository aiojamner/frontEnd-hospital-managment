import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Hospital Management System</h1>
      <nav>
        <Link to="/ip">IP</Link>
        <Link to="/op">OP</Link>
        <Link to="/pharmacy">Pharmacy</Link>
        <Link to="/reception">Reception</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/account">Account</Link>
        <Link to="/employee">Employee</Link>
        <Link to="/icu">ICU</Link>
      </nav>
    </header>
  );
};

export default Header;
