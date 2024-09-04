import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Common/Header';
import Sidebar from './components/Common/Sidebar';

import IPDashboard from './components/IP/IPDashboard';
import OPDashboard from './components/OP/OPDashboard';
import PharmacyDashboard from './components/PHARMACY/PharmacyDashboard';
import ReceptionDashboard from './components/RECEPTION/ReceptionDashboard';
import AdminDashboard from './components/ADMIN/AdminDashboard';
import AccountDashboard from './components/ACCOUNT/AccountDashboard';
import EmployeeDashboard from './components/EMPLOYEE/EmployeeDashboard';
import LoginComponent from './components/Auth/Login';

import ICUDashboard from './components/ICU/ICUDashboard';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  return (
    <Router>    
      <main>
        <Routes>
          <Route path="/" element={ <LoginComponent/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ip" element={<IPDashboard />} />
          <Route path="/op" element={<OPDashboard />} />
          {/* <Route path="/pharmacy" element={<PharmacyDashboard />} />
          <Route path="/reception" element={<ReceptionDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/account" element={<AccountDashboard />} />
          <Route path="/employee" element={<EmployeeDashboard />} />
          <Route path="/icu" element={<ICUDashboard />} /> */}
          
        </Routes>
      </main>
    </Router>
  );
};

export default App;
