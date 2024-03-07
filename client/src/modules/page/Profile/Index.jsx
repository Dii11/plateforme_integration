import React from "react";
import ProfilContent from "../../../components/userProfil/ProfilContent";
import ProfilNavigation from "../../../components/userProfil/ProfilNavigation";

const Compte = () => {
  return (
    <div className="grid grid-cols-5 gap-4 h-lvh">
      <div className="col-span-1 bg-blue-500 ">
        <ProfilNavigation />
      </div>
      <div className="col-span-4  ">
        <ProfilContent />
      </div>
    </div>
  );
};

export default Compte;
