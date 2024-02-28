// Import the necessary React hooks
import { useState, useEffect } from "react";

// Your functional component
const CDate = () => {
  // State to store the current date
  const [currentDate, setCurrentDate] = useState("");

  // useEffect to update the current date on component mount
  useEffect(() => {
    // Function to format the date as 'DD/MM/YYYY'
    const formatCurrentDate = () => {
      const now = new Date();
      const day = now.getDate();
      const month = now.getMonth() + 1; // Months are 0-based
      const year = now.getFullYear();

      return `${day}/${month}/${year}`;
    };

    // Set the current date
    setCurrentDate(formatCurrentDate());
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Your existing JSX code

  return (
    <div>
      {/* ... other content ... */}

      <div className="date">
        <p>{currentDate}</p>
      </div>

      <div className="card-body" id="products_table">
        {/* ... your existing table code ... */}
      </div>
    </div>
  );
};

export default CDate;
