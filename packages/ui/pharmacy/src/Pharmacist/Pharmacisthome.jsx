import FilterModal from "../All/FilterModal";
import MedicinesP from "./MedicinesP";
import ModalPhar from "./ModalPhar";
import Search from "../All/Search";
import AddMediModal from "./addMediModal";
import { useGlobalContext } from "../context";
import EddMediModal from "./eddMediModal";
import NavPharmacist from "./NavPharmacist";
import "../web.css";
import Logout from "../All/logoutModal"
import ArchivedMeds from "./ArchivedMeds";

const Pharmacisthome = () => {
  const { showModal, showAddMediModal, showEddMediModal, showFilterModal, showlogoutModal, archivedMeds } = useGlobalContext();

  return (
    <main style={{ "margin-top": "500px" }}>
      <NavPharmacist />
      <Search />
      {archivedMeds.length > 0 && <ArchivedMeds />}
      <MedicinesP />
      {showlogoutModal && <Logout />}
      {showModal && <ModalPhar />}
      {showAddMediModal && <AddMediModal />}
      {showEddMediModal && <EddMediModal />}
      {showFilterModal && <FilterModal />}
    </main>
  );
};
export default Pharmacisthome;
