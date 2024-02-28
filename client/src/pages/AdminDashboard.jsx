import Navbar from "../components/Navbar/NavBar";
import { useEffect, useState } from "react";
import { getUsername } from "../helper/helper";
import SpeedDialTooltipOpen from "../components/SpeedDial/AdminSpeedDial";
import CDate from "../components/Date";
import AdminDashbaordCount from "../components/AdminDashbaordCount";

export default function AdminDashboard() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const { username } = await getUsername();
        setUsername(username);
        const { role } = await getUsername();
        setRole(role);
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };

    fetchUsername();
  }, []);

  return (
    <div>
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

      <div className="px-7 py-5">
        <CDate></CDate>
      </div>
      <div className="flex justify-center items-center">
        <AdminDashbaordCount />
      </div>
      <SpeedDialTooltipOpen />
    </div>
  );
}
