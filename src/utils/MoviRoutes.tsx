import { Route, Routes } from "react-router-dom";
import Error404 from "../pages/Error404";
import MoviDashboard from "../pages/MoviDashboard";

function MoviRoutes() {
  return (
    <Routes>
    <Route path="/dashboard" element={<MoviDashboard />} />
    <Route path = "*" element={<Error404 />} />
  </Routes>
  )
}

export default MoviRoutes


