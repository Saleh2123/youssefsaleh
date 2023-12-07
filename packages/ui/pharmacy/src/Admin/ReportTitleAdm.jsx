import { useGlobalContext } from "../context";
import { useState } from "react";

const ReportTitleAdm = ()=>{
    const { selectedMonth, setSelectedMonth } = useGlobalContext();

    // Array of months
    const months = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];

    // Handle change event of the dropdown
    const handleDropdownChange = (event) => {
      setSelectedMonth(event.target.value);
    };

    return (
        <div style={{"display":"flex"}}>
            <h1 style={{"color":"orange"}} >
                Sales Report
            </h1>
            <div  style={{ color: "white", cursor: "pointer", "margin-top":"20px", "margin-left":"400px" }}>
      <label htmlFor="monthDropdown">Select a Month:</label>
      <select
        id="monthDropdown"
        value={selectedMonth}
        onChange={handleDropdownChange}
      >
        <option value="" disabled>Select a month</option>
        {months.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>

      {/* Display the selected month */}
    </div>
      </div>
    )
}
export default ReportTitleAdm
