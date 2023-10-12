import FilterModal from "./FilterModal";
import MedicinesP from "./MedicinesP";
import ModalPhar from "./ModalPhar";
import Search from "./Search";
import AddMediModal from "./addMediModal";
import { useGlobalContext } from "./context";
import EddMediModal from "./eddMediModal";
import "./web.css";

const Pharmacisthome = () => {
  const { showModal, showAddMediModal, showEddMediModal, showFilterModal } = useGlobalContext();

  return (
    <main style={{ "margin-top": "500px" }}>
      <Search />
      <MedicinesP />
      {showModal && <ModalPhar />}
      {showAddMediModal && <AddMediModal />}
      {showEddMediModal && <EddMediModal />}
      {showFilterModal && <FilterModal />}
    </main>
  );
};
export default Pharmacisthome;
