import React from 'react';
import { Nav } from 'react-bootstrap';
import {
  FiHome, FiCalendar, FiFileText, FiClock
} from 'react-icons/fi';
import { FaTooth, FaUserMd, FaUserInjured, FaNotesMedical } from 'react-icons/fa';

const Sidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen, currentRole }) => {
  const navItems = [
    { icon: <FiHome />, text: 'Dashboard', tab: 'dashboard', roles: ['admin', 'dentist', 'patient'] },
    { icon: <FaUserInjured />, text: 'Patients', tab: 'patients', roles: ['admin', 'dentist'] },
    { icon: <FaUserMd />, text: 'Dentists', tab: 'dentists', roles: ['admin'] },
    { icon: <FiCalendar />, text: 'Appointments', tab: 'appointments', roles: ['admin', 'dentist', 'patient'] },
    { icon: <FaNotesMedical />, text: 'Medical Records', tab: 'medical-records', roles: ['admin', 'dentist'] },
    { icon: <FiFileText />, text: 'Services', tab: 'services', roles: ['admin'] },
    { icon: <FiClock />, text: 'Schedules', tab: 'schedules', roles: ['admin', 'dentist'] }
  ];

  return (
    <div className="d-flex flex-column h-100 text-white">
      <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
        {sidebarOpen ? (
          <div className="d-flex align-items-center">
            <FaTooth className="me-2" />
            <span className="fw-bold">Dental Clinic</span>
          </div>
        ) : (
          <FaTooth className="mx-auto" />
        )}
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="btn btn-link text-white p-0"
        >
          {sidebarOpen ? '◀' : '▶'}
        </button>
      </div>
      
      <Nav className="flex-column p-2 flex-grow-1">
        {navItems.map((item) => (
          item.roles.includes(currentRole) && (
            <Nav.Link
              key={item.tab}
              active={activeTab === item.tab}
              onClick={() => setActiveTab(item.tab)}
              className={`d-flex align-items-center mb-1 rounded ${activeTab === item.tab ? 'bg-white text-primary' : 'text-white hover-bg-light'}`}
            >
              <span className="fs-5">{item.icon}</span>
              {sidebarOpen && <span className="ms-2">{item.text}</span>}
            </Nav.Link>
          )
        ))}
      </Nav>
      
      <div className="p-3 border-top">
        <div className="d-flex align-items-center">
          <div className="rounded-circle bg-white text-primary d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
            <FiUser />
          </div>
          {sidebarOpen && (
            <div className="ms-2">
              <div className="small fw-bold">Admin User</div>
              <div className="small text-white-50">admin@clinic.com</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;