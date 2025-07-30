import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserProfile } from "./pages/UserProfile"; 
import {Login} from "./pages/Login";

export const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username) => {
    setUser(username);
    localStorage.setItem("user", JSON.stringify(username));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={login} />} />
        <Route
          path="/home"
          element={
            user ? <Home user={user} onLogout={logout} /> : <Navigate to="/" />
          }
        />
        
        <Route path="/profile/:username" element={<UserProfile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};


