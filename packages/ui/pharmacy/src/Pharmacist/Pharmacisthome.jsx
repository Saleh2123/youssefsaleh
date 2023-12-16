import FilterModal from "../All/FilterModal";
import MedicinesP from "./MedicinesP";
import ModalPhar from "./ModalPhar";
import Search from "../All/Search";
import AddMediModal from "./addMediModal";
import { useGlobalContext } from "../context";
import EddMediModal from "./eddMediModal";
import NavPharmacist from "./NavPharmacist";
import "../web.css";
import "../Patient/viewcart.css"
import Logout from "../All/logoutModal"
import ArchivedMeds from "./ArchivedMeds";
import PatientsListModal from "./patientsListModal";
import DoctorsListModal from "./doctorsListModal";
import ChooseListModal from "./chooseListModal";

const Pharmacisthome = () => {
  const { showModal, showAddMediModal, showEddMediModal, showFilterModal, showlogoutModal, archivedMeds,
    showChatModal,showChatModal1,showChatModal2} = useGlobalContext();

  return (
    <div className="page-container">
      <header>
      <NavPharmacist />
      </header>
      <Search />
      {archivedMeds.length > 0 && <ArchivedMeds />}
      <MedicinesP />
      {showlogoutModal && <Logout />}
      {showModal && <ModalPhar />}
      {showAddMediModal && <AddMediModal />}
      {showEddMediModal && <EddMediModal />}
      {showFilterModal && <FilterModal />}
      {showChatModal && <ChooseListModal/>}
      {showChatModal1 && <DoctorsListModal/>}
      {showChatModal2 && <PatientsListModal/>}
    </div>
  );
};
export default Pharmacisthome;
