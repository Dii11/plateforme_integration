import React, { useState } from "react";
import { Icon } from "@mui/material";
import CardSlider from "../Slider/card/Index";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Home } from "@mui/icons-material";
const Parcours = () => (
  <div>
    <div>
      <Typography variant="body1" color="initial">
        Mention IA
      </Typography>
      <div className="flex gap-10 justify-center">
        <Card variant="outlined">
          <CardContent>
            <div className="rouded bg-black ">
              <Icon>
                <Home />
              </Icon>
            </div>
          </CardContent>

        </Card>
        <Card variant="outlined">
          <CardContent>
            <div className="rouded bg-red w-60 h-60">
              <Icon>
                <Home />
              </Icon>
            </div>
          </CardContent>

        </Card>
      </div>
    </div>
    <div></div>
  </div>
);

const Formation = () => (
  <div>
    <p>Contenu de l'item 2</p>
    {/* Autres composants ou éléments peuvent être ajoutés ici */}
  </div>
);

const SimpleTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const tabItems = [
    { label: "Parcours", content: <Parcours /> },
    { label: "Formation", content: <Formation /> },
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
              borderBottom: index === value && "2px solid #000",
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
