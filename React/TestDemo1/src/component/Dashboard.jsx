import { useState } from "react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [liked, setLiked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "bg-dark text-white min-vh-100 p-4"
          : "bg-light min-vh-100 p-4"
      }
    >

      <button
        className="btn btn-primary me-2"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <i className={sidebarOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
      </button>

      <button
        className="btn btn-secondary me-2"
        onClick={() => setDarkMode(!darkMode)}
      >
        <i className={darkMode ? "bi bi-sun-fill" : "bi bi-moon-fill"}></i>
      </button>

     
      <button
        className="btn btn-warning me-2"
        onClick={() => setShowNotification(true)}
      >
        <i className="bi bi-bell-fill"></i>
      </button>

   
      <button
        className={`btn me-2 ${liked ? "btn-danger" : "btn-outline-danger"}`}
        onClick={() => setLiked(!liked)}
      >
        <i className={liked ? "bi bi-heart-fill" : "bi bi-heart"}></i> Like
      </button>

      <button
        className="btn btn-success"
        onClick={() => setLoggedIn(!loggedIn)}
      >
        <i
          className={
            loggedIn ? "bi bi-box-arrow-right" : "bi bi-box-arrow-in-right"
          }
        ></i>{" "}
        {loggedIn ? "Logout" : "Login"}
      </button>

      {sidebarOpen && (
        <aside
          className="mt-4 p-3 border rounded bg-white text-dark"
          style={{ width: "220px" }}
        >
          <h5>Sidebar Menu</h5>
          <p>
            <i className="bi bi-house"></i> Home
          </p>
          <p>
            <i className="bi bi-person"></i> Profile
          </p>
          <p>
            <i className="bi bi-gear"></i> Settings
          </p>
        </aside>
      )}

      {showNotification && (
        <div className="alert alert-success mt-3">
          New notification received!
          <button
            className="btn-close float-end"
            onClick={() => setShowNotification(false)}
          />
        </div>
      )}
    </div>
  );
}
