// src/components/GuestRoute.js
import { Navigate } from 'react-router-dom';

const GuestRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (token) {
    return <Navigate to="/show-student" replace />;
  }

  return children;
};

export default GuestRoute;
