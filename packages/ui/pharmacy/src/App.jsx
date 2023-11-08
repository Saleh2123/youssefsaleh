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
import Password from './All/password';

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

        <Route path="/pass" element={<Password />} />

      </Routes>
    </BrowserRouter>
    </main>
  );
}

export default App;
