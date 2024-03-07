import React, { useState } from "react";
import Activite from "./Activite";
import Entreprise from "./Entreprise";


const SimpleTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const tabItems = [
    { label: "Club ENI", content: <Activite /> },
    { label: "Entreprises", content: <Entreprise /> },
  ];

  return (
    <>
      <div className="flex">
        {tabItems.map((tab, index) => (
          <div
            key={index}
            onClick={() => handleChange(index)}
            style={{
              cursor: "pointer",
              padding: "10px",
              borderBottom: index === value && "4px solid blue",
            }}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {tabItems[value].content}
      </div>
    </>
  );
};

export default SimpleTab;
