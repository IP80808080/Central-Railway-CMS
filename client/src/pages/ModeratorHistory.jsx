import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { getUsername } from "../helper/helper";

import ModeratorHYP from "../components/MRHistory/ModeratorHYP";
import ModeratorHYBR from "../components/MRHistory/ModeratorHYBR";
import ModeratorHYE from "../components/MRHistory/ModeratorHYE";
import ModeratorHYHR from "../components/MRHistory/ModeratorHYHR";
import ModeratorHYAU from "../components/MRHistory/ModeratorHYAU";
import ModeratorHYS from "../components/MRHistory/ModeratorHYS";
import ModeratorHYTR from "../components/MRHistory/ModeratorHYTR";
import ModeratorHYTM from "../components/MRHistory/ModeratorHYTM";

export default function ModeratorHistory() {
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
      sectionComponent = <ModeratorHYP />;
      break;
    case "Body_Repair":
      sectionComponent = <ModeratorHYBR />;
      break;
    case "Electronics":
      sectionComponent = <ModeratorHYE />;
      break;
    case "Heavy_Repair":
      sectionComponent = <ModeratorHYHR />;
      break;
    case "Auxiliary":
      sectionComponent = <ModeratorHYAU />;
      break;
    case "Static":
      sectionComponent = <ModeratorHYS />;
      break;
    case "Test_Room":
      sectionComponent = <ModeratorHYTR />;
      break;
    case "Traction_Motor":
      sectionComponent = <ModeratorHYTM />;
      break;
    default:
      navigate("/moderator-dashboard");
      break;
  }
  return <>{sectionComponent}</>;
}
