import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li><Link to="/ip">IP</Link></li>
        <li><Link to="/op">OP</Link></li>
        <li><Link to="/pharmacy">Pharmacy</Link></li>
        <li><Link to="/reception">Reception</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/account">Account</Link></li>
        <li><Link to="/employee">Employee</Link></li>
        <li><Link to="/icu">ICU</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
