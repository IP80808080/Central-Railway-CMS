import Navbar from "../components/Navbar/NavBar";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { getUsername } from "../helper/helper";
import SpeedDialTooltipOpen from "../components/SpeedDial/ModeratorSpeedDial";
import CDate from "../components/Date";
import ModeratorSRP from "../components/MRTable/ModeratorSRP";
import ModeratorSRBR from "../components/MRTable/ModeratorSRBR";
import ModeratorSRE from "../components/MRTable/ModeratorSRE";
import ModeratorSRHR from "../components/MRTable/ModeratorSRHR";
import ModeratorSRAU from "../components/MRTable/ModeratorSRAU";
import ModeratorSRS from "../components/MRTable/ModeratorSRS";
import ModeratorSRTR from "../components/MRTable/ModeratorSRTR";
import ModeratorSRTM from "../components/MRTable/ModeratorSRTM";

export default function ModeratorDashboard() {
  const navigate = useNavigate();
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
  let sectionComponent;
  switch (section) {
    case "Pneumatic":
      sectionComponent = <ModeratorSRP />;
      break;
    case "Body_Repair":
      sectionComponent = <ModeratorSRBR />;
      break;
    case "Electronics":
      sectionComponent = <ModeratorSRE />;
      break;
    case "Heavy_Repair":
      sectionComponent = <ModeratorSRHR />;
      break;
    case "Auxiliary":
      sectionComponent = <ModeratorSRAU />;
      break;
    case "Static":
      sectionComponent = <ModeratorSRS />;
      break;
    case "Test_Room":
      sectionComponent = <ModeratorSRTR />;
      break;
    case "Traction_Motor":
      sectionComponent = <ModeratorSRTM />;
      break;
    default:
      navigate("/moderator-dashboard");
      break;
  }

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
      <br></br>
      <h2 className="text-xl underline px-7">{section}</h2>
      <div className="px-7 py-5">
        <CDate></CDate>
      </div>

      {sectionComponent}
      <SpeedDialTooltipOpen />
    </div>
  );
}
