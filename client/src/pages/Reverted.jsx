import RevertedP from "../components/RevertedSections/RevertedP";
import RevertedBR from "../components/RevertedSections/RevertedBR";
import RevertedE from "../components/RevertedSections/RevertedE";
import RevertedHR from "../components/RevertedSections/RevertedHR";
import RevertedAU from "../components/RevertedSections/RevertedAU";
import RevertedS from "../components/RevertedSections/RevertedS";
import RevertedTR from "../components/RevertedSections/RevertedTR";
import RevertedTM from "../components/RevertedSections/RevertedTM";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { getUsername } from "../helper/helper";

export default function Reverted() {
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
      sectionComponent = <RevertedP />;
      break;
    case "Body_Repair":
      sectionComponent = <RevertedBR />;
      break;
    case "Electronics":
      sectionComponent = <RevertedE />;
      break;
    case "Heavy_Repair":
      sectionComponent = <RevertedHR />;
      break;
    case "Auxiliary":
      sectionComponent = <RevertedAU />;
      break;
    case "Static":
      sectionComponent = <RevertedS />;
      break;
    case "Test_Room":
      sectionComponent = <RevertedTR />;
      break;
    case "Traction_Motor":
      sectionComponent = <RevertedTM />;
      break;
    default:
      navigate("/dashboard");
      break;
  }
  return <>{sectionComponent}</>;
}
