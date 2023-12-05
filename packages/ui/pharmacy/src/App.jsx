"use client"
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Openpage from './openpage';
import Openpage2 from './openpage2';
import Register from './register';
import Registerr from './register2';
import Adminhome from './Admin/Adminhome';
import Pharmacisthome from './Pharmacist/Pharmacisthome';
import Patienthome from './Patient/Patienthome';
import Pharmacistsview from './Admin/pharmacistsview';
import Patientsview from './Admin/patientsview';
import Addadmin from './Admin/addadmin';
import Requestshome from './Admin/Requestshome';
import LoginPhar from './loginPhar';
import LoginPatient from './loginPatient';
import LoginAdmin from './loginAdmin';
import PasswordAdmin from './Admin/passwordadmin';
import PasswordPatient from './Patient/passwordpatient';
import PasswordPharmacist from './Pharmacist/passwordpharmacist';
import Carthome from './Patient/carthome';
import Checkouthome from './Patient/checkouthome';
import SelectAddress from './Patient/SelectAddress';
import AddAddress from './Patient/AddAddress';
import Orderhome from './Patient/orderhome';
import EmailPa from './emailPa';
import EmailPh from './emailPh';
import EmailAd from './emailAd';
import PassAdmin from './passadmin';
import PassPatient from './passpatient';
import PassPharmacist from './passpharmacist';
import Notifications from './Pharmacist/Notifications';

function App() {
  return (
    <main className='container'>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Openpage />} />

        <Route path="/two" element={<Openpage2 />} />

        <Route path="/regpa" element={<Register />} />

        <Route path="/regph" element={<Registerr />} />

        <Route path="/adminhome" element={<Adminhome />} />

        <Route path="/pharhome" element={<Pharmacisthome />} />

        <Route path="/patienthome" element={<Patienthome />} />

        <Route path="/pharview" element={<Pharmacistsview />} />

        <Route path="/patientsview" element={<Patientsview />} />

        <Route path="/addadmin" element={<Addadmin />} />

        <Route path="/requestshome" element={<Requestshome />} />

        <Route path="/loginA" element={<LoginAdmin />} />

        <Route path="/loginPh" element={<LoginPhar />} />

        <Route path="/loginPa" element={<LoginPatient />} />

        <Route path="/passA" element={<PasswordAdmin />} />

        <Route path="/passPa" element={<PasswordPatient />} />

        <Route path="/passPh" element={<PasswordPharmacist />} />

        <Route path="/viewcart" element={<Carthome />} />

        <Route path="/checkout" element={<Checkouthome />} />

        <Route path="/seladdress" element={<SelectAddress />} />

        <Route path="/addaddress" element={<AddAddress />} />

        <Route path="/order" element={<Orderhome />} />

        <Route path="/emailpa" element={<EmailPa />} />

        <Route path="/emailph" element={<EmailPh />} />

        <Route path="/emailad" element={<EmailAd />} />

        <Route path="/passadmin" element={<PassAdmin />} />

        <Route path="/passpharmacist" element={<PassPharmacist />} />

        <Route path="/passpatient" element={<PassPatient />} />

        <Route path="/noti" element={<Notifications />} />

      </Routes>
    </BrowserRouter>
    </main>
  );
}

export default App;
