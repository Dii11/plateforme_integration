import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { Search, Assessment, AssignmentTurnedIn } from "@mui/icons-material";
import NomUEAccordion from "./NomUEAccordion";

const Formation = () => {
  const [searchValue, setSearchValue] = useState("");
  const [niveauValue, setNiveauValue] = useState("");
  const [parcoursValue, setParcoursValue] = useState("");
  const [typeValue, setTypeValue] = useState("tous");

  const formations = [
    {
      nomUE: "tech",
      nomEC: "algo",
      sigle: "AV",
      description: "drbfgvjkzsedb gvlkezgz",
    },
    {
      nomUE: "tech",
      nomEC: "algo",
      sigle: "AV",
      description: "drbfgvjkzsedb gvlkezgz",
    },
    {
      nomUE: "logistique",
      nomEC: "algo",
      sigle: "AV",
      description: "drbfgvjkzsedb gvlkezgz",
    }, {
      nomUE: "tech",
      nomEC: "algo",
      sigle: "AV",
      description: "drbfgvjkzsedb gvlkezgz",
    }, {
      nomUE: "tech",
      nomEC: "algo",
      sigle: "AV",
      description: "drbfgvjkzsedb gvlkezgz",
    },
    {
      nomUE: "tech",
      nomEC: "algo",
      sigle: "AV",
      description: "drbfgvjkzsedb gvlkezgz",
    },
    {
      nomUE: "tech",
      nomEC: "algo",
      sigle: "AV",
      description: "drbfgvjkzsedb gvlkezgz",
    },
  ];
  const uniqueNomUEs = Array.from(new Set(formations.map((formation) => formation.nomUE)));

  useEffect(() => {
    console.log(
      "Filtrer par : ",
      typeValue,
      niveauValue,
      parcoursValue,
      searchValue
    );
  }, [typeValue, niveauValue, parcoursValue, searchValue]);

  return (
    <div className="flex-col ">
      <div className="filter flex justify-between items-center">
        <div className="flex transition-all duration-300 ease-in-out shadow-lg py-2 px-5">
          {/* Types radio (tous, UE, EC) */}
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="type"
              name="type"
              value={typeValue}
              onChange={(e) => setTypeValue(e.target.value)}
              row
            >
              <FormControlLabel value="tous" control={<Radio />} label="Tous" />
              <FormControlLabel value="UE" control={<Radio />} label="UE" />
              <FormControlLabel value="EC" control={<Radio />} label="EC" />
            </RadioGroup>
          </FormControl>

          <div>
            {/* Champ de recherche avec l'icône Search */}
            <TextField
              size="small"
              id="search"
              label="Recherche"
              type="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              InputProps={{
                endAdornment: (
                  <Search
                    fontSize="small"
                    style={{ marginRight: "8px" }}
                    color="primary"
                  />
                ),
              }}
            />
          </div>
        </div>

        <div className="flex gap-2 ">
          {/* Champ niveau (Select) */}
          <FormControl size="small">
            <InputLabel id="niveau-label">
              <Assessment
                fontSize="small"
                style={{ marginRight: "8px" }}
                color="primary"
              />
              Niveau
            </InputLabel>
            <Select
              labelId="niveau-label"
              id="niveau"
              value={niveauValue}
              onChange={(e) => setNiveauValue(e.target.value)}
              label="Niveau"
              style={{ minWidth: "120px" }}
            >
              <MenuItem value="L1">L1</MenuItem>
              <MenuItem value="L2">L2</MenuItem>
              <MenuItem value="L3">L3</MenuItem>
              <MenuItem value="M1">M1</MenuItem>
              <MenuItem value="M2">M2</MenuItem>
            </Select>
          </FormControl>

          {/* Champ parcours (Select) */}
          <FormControl size="small">
            <InputLabel id="parcours-label">
              <AssignmentTurnedIn
                fontSize="small"
                style={{ marginRight: "8px" }}
                color="primary"
              />
              Parcours
            </InputLabel>
            <Select
              labelId="parcours-label"
              id="parcours"
              value={parcoursValue}
              onChange={(e) => setParcoursValue(e.target.value)}
              label="Parcours"
              style={{ minWidth: "120px" }}
            >
              <MenuItem value="GID">GID</MenuItem>
              <MenuItem value="OCC">OCC</MenuItem>
              <MenuItem value="GB">GB</MenuItem>
              <MenuItem value="SR">SR</MenuItem>
              <MenuItem value="IG">IG</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className=" pt-10">
        {uniqueNomUEs.map((nomUE, index) => (
          <NomUEAccordion key={index} nomUE={nomUE} formations={formations.filter((formation) => formation.nomUE === nomUE)} />
        ))}
      </div>
    </div>
  );
};

export default Formation;
