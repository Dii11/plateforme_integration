import React from "react";
import ProfilContent from "../../../components/userProfil/ProfilContent";
import ProfilNavigation from "../../../components/userProfil/ProfilNavigation";

const Compte = () => {
  return (
    <div class="grid grid-cols-5 gap-4 h-lvh">
      <div class="col-span-1 bg-blue-500 ">
        <ProfilNavigation />
      </div>
      <div class="col-span-4  ">
        <ProfilContent />
      </div>
    </div>
  );
};

export default Compte;
