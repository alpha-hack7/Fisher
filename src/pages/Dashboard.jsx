import { Outlet } from "react-router-dom";
import "./../css/dashboard.css";
import Sidebar from "./Dashboard/sidebar.jsx";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="dashboard-main">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
