import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { Toaster, toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import TablesDashboard from "../components/Tables";
import Navbar from "../components/Navbar/NavBar";
import SpeedDialTooltipOpen from "../components/SpeedDial/SpeedDial";
import CDate from "../components/Date";
import { useAuth } from "../context/AuthContext";
import { getUsername } from "../helper/helper";
import RevertNotification from "../components/RevertNotification";

export default function Dashboard() {
  const { state } = useAuth();
  const userSection = state.user ? state.user.section : null;
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [section, setSection] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const { username } = await getUsername();
        setUsername(username);
        const { role } = await getUsername();
        setRole(role);
        const { section } = await getUsername();
        setSection(section);
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };

    fetchUsername();
  }, []);

  const renderSectionTables = () => {
    switch (userSection) {
      case "Pneumatic":
        return <TablesDashboard section="Pneumatic" />;
      case "Test_Room":
        return <TablesDashboard section="Test_Room" />;
      case "Electronics":
        return <TablesDashboard section="Electronics" />;
      case "Traction_Motor":
        return <TablesDashboard section="Traction_Motor" />;
      case "Static":
        return <TablesDashboard section="Static" />;
      case "Auxiliary":
        return <TablesDashboard section="Auxiliary" />;
      case "Body_Repair":
        return <TablesDashboard section="Body_Repair" />;
      case "Heavy_Repair":
        return <TablesDashboard section="Heavy_Repair" />;

      default:
        return <div>No tables available for this section</div>;
    }
  };

  return (
    <div className="">
      <Navbar />

      <br></br>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center mb-4"></div>

        <div className="flex flex-col items-center sm:flex-row sm:justify-center">
          <h1 className="text-4xl font-bold">Welcome, </h1>
          <h1 className="text-4xl font-bold">{username}! </h1>
        </div>
        <div className="flex justify-center">
          <h3 className="text-xl">{role}</h3>
        </div>
      </div>
      <br></br>
      <h2 className="text-xl underline px-7">{section}</h2>
      <div className="flex justify-between px-7 py-5">
        <CDate></CDate>
        <RevertNotification />
      </div>
      {renderSectionTables()}
      <br></br>

      <SpeedDialTooltipOpen />
    </div>
  );
}
