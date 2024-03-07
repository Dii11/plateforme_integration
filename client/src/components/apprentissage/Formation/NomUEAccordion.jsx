import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormationCard from "./FormationCard";

const NomUEAccordion = ({ nomUE, formations }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${nomUE}-content`} id={`${nomUE}-header`}>
        <Typography>{nomUE}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex wrap gap-5">
          {formations.map((formation, index) => (
            <div key={index}>
              <FormationCard props={formation} />
            </div>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default NomUEAccordion;
