import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import Error404 from "./pages/Error404";
import ProtectedRoute from './utils/ProtectedRoute'
import ImageSlider from "./components/ImageSlider";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const MoviRoutes = lazy(() => import("./utils/MoviRoutes"));

function App() {

  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/try" element={<ImageSlider />} />
          <Route 
          path="/movi/*"
          element = {
        <ProtectedRoute>
            <MoviRoutes />
        </ProtectedRoute>
      }
      />
          <Route path = "*" element={<Error404 />} />
        </Routes>
      </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
