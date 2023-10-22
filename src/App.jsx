import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      
      <Outlet />
    </div>
  );
}
