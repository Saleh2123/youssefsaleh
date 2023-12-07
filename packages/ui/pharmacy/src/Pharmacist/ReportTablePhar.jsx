import { useState, useEffect } from 'react';
import { BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/bs';
import { useGlobalContext } from '../context';

const ReportTablePhar = () => {
  const { medicines, medicineTable } = useGlobalContext();

  const renderIcon = (change) => {
    return change > 0 ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />;
  };

  if(medicineTable){
    return (
        <div>
          <table className="table table-hover mt-5 rounded">
            <thead>
              <tr>
                <th scope="col">Medicine Name</th>
                <th scope="col">Type</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Remaining Quantity</th>
                <th scope="col">Last Month Sales</th>
                <th scope="col">Chg</th>
                <th scope="col">Chg%</th>
              </tr>
            </thead>
            <tbody>
                  <tr key={medicineTable.name} style={{ cursor: 'pointer' }} className="table-row">
                    <th scope="row">{medicineTable.name}</th>
                    <td>{medicineTable.use}</td>
                    <td style={{ textAlign: 'center' }}>{medicineTable.description}</td>
                    <td style={{ textAlign: 'center' }}>{medicineTable.price}</td>
                    <td style={{ textAlign: 'center' }}>{medicineTable.quantity}</td>
                    <td style={{ textAlign: 'center' }}>{medicineTable.sales}</td>
                    <td className={medicineTable.sales > 0 ? 'text-success' : 'text-danger'}>
                      {medicineTable.sales}
                      {medicineTable.sales > 0 ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
                    </td>
                    <td className={medicineTable.sales > 0 ? 'text-success' : 'text-danger'}>
                      {medicineTable.sales}
                      {renderIcon(1222)}
                    </td>
                  </tr>
            </tbody>
          </table>
        </div>
      )
  }
  else{
  return (
    <div>
      <table className="table table-hover mt-5 rounded">
        <thead>
          <tr>
            <th scope="col">Medicine Name</th>
            {/* <th scope="col">Type</th>
            <th scope="col">Description</th> */}
            <th scope="col">Price</th>
            <th scope="col">Remaining Quantity</th>
            <th scope="col">Last Month Sales</th>
            <th scope="col">Chg</th>
            <th scope="col">Chg%</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine) => {
            return (
              <tr key={medicine.name} style={{ cursor: 'pointer' }} className="table-row">
                <th scope="row">{medicine.name}</th>
                {/* <td>{medicine.use}</td>
                <td style={{ textAlign: 'center' }}>{medicine.description}</td> */}
                <td style={{ textAlign: 'center' }}>{medicine.price}</td>
                <td style={{ textAlign: 'center' }}>{medicine.quantity}</td>
                <td style={{ textAlign: 'center' }}>{medicine.sales}</td>
                <td className={medicine.sales > 0 ? 'text-success' : 'text-danger'}>
                  {medicine.sales}
                  {medicine.sales > 0 ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
                </td>
                <td className={medicine.sales > 0 ? 'text-success' : 'text-danger'}>
                  {medicine.sales}
                  {renderIcon(1222)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )};
};

export default ReportTablePhar;
