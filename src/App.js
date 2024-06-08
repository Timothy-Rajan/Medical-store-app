// src/App.js

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, [navigate]);

  return (
    <div>
      {/* You can add more content here as needed */}
    </div>
  );
}

export default App;
