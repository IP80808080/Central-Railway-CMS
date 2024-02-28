import { getUsername } from "../helper/helper";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import UserHYP from "../components/UHistory/UserHYP";
import UserHYBR from "../components/UHistory/UserHYBR";
import UserHYE from "../components/UHistory/UserHYE";
import UserHYHR from "../components/UHistory/UserHYHR";
import UserHYAU from "../components/UHistory/UserHYAU";
import UserHYS from "../components/UHistory/UserHYS";
import UserHYTR from "../components/UHistory/UserHYTR";
import UserHYTM from "../components/UHistory/UserHYTM";

export default function UserHistory() {
  const navigate = useNavigate();
  const [section, setSection] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      try {
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
      sectionComponent = <UserHYP />;
      break;
    case "Body_Repair":
      sectionComponent = <UserHYBR />;
      break;
    case "Electronics":
      sectionComponent = <UserHYE />;
      break;
    case "Heavy_Repair":
      sectionComponent = <UserHYHR />;
      break;
    case "Auxiliary":
      sectionComponent = <UserHYAU />;
      break;
    case "Static":
      sectionComponent = <UserHYS />;
      break;
    case "Test_Room":
      sectionComponent = <UserHYTR />;
      break;
    case "Traction_Motor":
      sectionComponent = <UserHYTM />;
      break;
    default:
      navigate("/dashboard");
      break;
  }
  return <>{sectionComponent}</>;
}
