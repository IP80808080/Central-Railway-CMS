import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";

import {
  FaBars,
  FaDoorOpen,
  FaRegGrin,
  FaHistory,
  FaAngleDoubleUp,
} from "react-icons/fa";

const actions = [
  { icon: <FaDoorOpen />, name: "Logout" },
  { icon: <FaHistory />, name: "History" },
  { icon: <FaAngleDoubleUp />, name: "Upgrade" },
  { icon: <FaRegGrin />, name: "Profile" },
];

export default function SpeedDialTooltipOpen() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleActionClick = async (actionName) => {
    if (actionName === "Profile") {
      navigate("/admin-dashboard/update");
    } else if (actionName === "Upgrade") {
      navigate("/admin-dashboard/promotion");
    } else if (actionName === "History") {
      navigate("/admin-dashboard/history");
    } else if (actionName === "Logout") {
      try {
        await axios.post("/logout");
        localStorage.clear(); // Optionally clear session storage
        navigate("/"); // Redirect to "/"
      } catch (error) {
        console.error("Logout failed:", error);
        // Handle errors gracefully (e.g., display message)
      }
    } else {
      // ... handle other actions
    }
  };

  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<FaBars />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => handleActionClick(action.name)}
          />
        ))}
      </SpeedDial>
    </>
  );
}
