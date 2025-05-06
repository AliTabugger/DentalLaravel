import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login,";
import Register from "./components/Register";
import GuestRoute from "./components/GuestRoute";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuestRoute> <Login /> </GuestRoute>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;