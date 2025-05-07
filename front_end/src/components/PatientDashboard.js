import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { 
  House, 
  Person, 
  Calendar, 
  Clipboard, 
  Gear, 
  List,
  X 
} from 'react-bootstrap-icons';

// Main Dashboard Component
const PatientDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <div className={`bg-dark text-white ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}
        style={{ 
          width: sidebarOpen ? '250px' : '60px',
          transition: 'width 0.3s',
          position: 'relative'
        }}>
        
        <div className="p-3 d-flex justify-content-between align-items-center">
          {sidebarOpen && <h5 className="m-0">DentalCare</h5>}
          <button onClick={toggleSidebar} className="btn btn-link text-white p-0">
            {sidebarOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
        
        <hr className="my-1 bg-secondary" />
        
        <nav className="nav flex-column px-2">
          <NavLink to="/patient-dashboard/" icon={<House />} label="Dashboard" sidebarOpen={sidebarOpen} />
          <NavLink to="/patient-dashboard/profile" icon={<Person />} label="Profile" sidebarOpen={sidebarOpen} />
          <NavLink to="/patient-dashboard/appointments" icon={<Calendar />} label="Appointments" sidebarOpen={sidebarOpen} />
          <NavLink to="/patient-dashboard/medical-history" icon={<Clipboard />} label="Medical History" sidebarOpen={sidebarOpen} />
          <NavLink to="/patient-dashboard/settings" icon={<Gear />} label="Settings" sidebarOpen={sidebarOpen} />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 bg-light">
        <div className="p-4">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/medical-history" element={<MedicalHistoryPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};



// Page Components (keep these the same as in your original code)
const NavLink = ({ to, icon, label, sidebarOpen }) => {
  return (
    <Link 
      to={to} 
      className="nav-link text-white py-3 d-flex align-items-center"
      style={{ borderRadius: '5px', transition: 'all 0.2s' }}
      activeclassname="active"
    >
      <span className="me-3">{icon}</span>
      {sidebarOpen && <span>{label}</span>}
    </Link>
  );
};

// Page Components
const DashboardHome = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h5 className="card-title">Upcoming Appointment</h5>
              <p className="card-text">Tomorrow, 10:00 AM</p>
              <p className="card-text">Dental Checkup</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">Medical Records</h5>
              <p className="card-text">3 entries available</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-info text-white">
            <div className="card-body">
              <h5 className="card-title">Recent Activity</h5>
              <p className="card-text">Last visit: 2 weeks ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfilePage = () => {
  return (
    <div>
      <h2>Profile</h2>
      <div className="card mt-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p><strong>Name:</strong> John Doe</p>
              <p><strong>Email:</strong> john@example.com</p>
              <p><strong>Phone:</strong> (123) 456-7890</p>
            </div>
            <div className="col-md-6">
              <p><strong>Role:</strong> Patient</p>
              <p><strong>Member Since:</strong> January 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AppointmentsPage = () => {
  const appointments = [
    { id: 1, date: '2023-06-15', time: '10:00 AM', service: 'Dental Checkup', dentist: 'Dr. Smith', status: 'confirmed' },
    { id: 2, date: '2023-07-01', time: '02:30 PM', service: 'Teeth Cleaning', dentist: 'Dr. Johnson', status: 'pending' },
    { id: 3, date: '2023-05-20', time: '09:15 AM', service: 'Cavity Filling', dentist: 'Dr. Smith', status: 'completed' }
  ];

  const getStatusBadge = (status) => {
    const statusClasses = {
      confirmed: 'bg-success',
      pending: 'bg-warning',
      completed: 'bg-info',
      cancelled: 'bg-danger'
    };
    return <span className={`badge ${statusClasses[status] || 'bg-secondary'}`}>{status}</span>;
  };

  return (
    <div>
      <h2>Appointments</h2>
      <div className="mt-4">
        <button className="btn btn-primary mb-3">Book New Appointment</button>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Service</th>
                <th>Dentist</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(app => (
                <tr key={app.id}>
                  <td>{app.date}</td>
                  <td>{app.time}</td>
                  <td>{app.service}</td>
                  <td>{app.dentist}</td>
                  <td>{getStatusBadge(app.status)}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-1">View</button>
                    <button className="btn btn-sm btn-outline-danger">Cancel</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const MedicalHistoryPage = () => {
  const medicalHistory = {
    allergies: 'Penicillin, Pollen',
    conditions: 'None',
    previousTreatments: 'Root canal (2019)',
    medications: 'Ibuprofen as needed',
    notes: 'Patient has mild anxiety about dental procedures'
  };

  return (
    <div>
      <h2>Medical History</h2>
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Allergies</h5>
          <p className="card-text">{medicalHistory.allergies || 'None recorded'}</p>
          
          <h5 className="card-title mt-4">Medical Conditions</h5>
          <p className="card-text">{medicalHistory.conditions || 'None recorded'}</p>
          
          <h5 className="card-title mt-4">Previous Treatments</h5>
          <p className="card-text">{medicalHistory.previousTreatments || 'None recorded'}</p>
          
          <h5 className="card-title mt-4">Current Medications</h5>
          <p className="card-text">{medicalHistory.medications || 'None recorded'}</p>
          
          <h5 className="card-title mt-4">Additional Notes</h5>
          <p className="card-text">{medicalHistory.notes || 'None'}</p>
        </div>
      </div>
    </div>
  );
};

const SettingsPage = () => {
  return (
    <div>
      <h2>Settings</h2>
      <div className="card mt-4">
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" value="john@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" className="form-control" id="phone" value="(123) 456-7890" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Change Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter new password" />
            </div>
            <button type="submit" className="btn btn-primary">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;