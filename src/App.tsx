import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import RequestAccess from "./pages/RequestAccess";
import Dashboard from "./pages/Dashboard";
import TeamManage from "./pages/TeamManage";
import ProtectedRoute from "./components/ProtectedRoute";
import "./styles/global.scss";
import Projects from "./pages/Projects";
import CreateVideo from "./pages/CreateVideo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/request-access" element={<RequestAccess />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-video"
          element={
            <ProtectedRoute>
              <CreateVideo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }
        />
        <Route
          path="/team-manage"
          element={
            <ProtectedRoute>
              <TeamManage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
