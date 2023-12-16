# Topp Pharmacy

# Project Title

El7a2ny: Virtual Pharmacy

## Motivation

El7a2ny Virtual Pharmacy is a software solution for admins, pharmacists and patients trying to interact
and fulfill each other's needs on stream. This includes patients buying medicines, communicate with pharmacists and take pieces of advice from them..etc, and includes pharmacists adding / changing medicines...etc, just like in real life.

## Build Status

* The project is currently in development
* The project needs more thorough testing

## Code Style

Describe the coding style you're following (e.g., linting rules).

## Screenshots

![Cart](screenshots/cart.png)
A Patient adding medicines to his Cart.

![Choosing Prescription](screenshots/prescriptions.png)
A Patient choosing a related prescription to be able to add medicineC to his Cart.

![Checkout order](screenshots/checkout.png)
A Patient is at the checkout stage where he chooses the payment method, address...

![Add new medicine option](screenshots/AddMedicine.png)
A Pharmacist view of all medicines and has the option to add a new One.

![A Medicine out of stock notification](screenshots/Notification.png)
A Pharmacist getting notified that medicineB is out of stock.

![Two Medicines Archived](screenshots/Archive.png)
A Pharmacist decides to archive MedicineB & MedicineD.

![Adding new admin](screenshots/addAdmin.png)
An Admin adding a new Admin to the system.

![Requests of Pharmacists](screenshots/Requests.png)
An Admin seeing the requests of the guests applying as Pharmacists.

![Accept or reject the request](screenshots/AcceptReject.png)
An Admin choosing whether to accept or reject the request.

## Tech/Framework used

MERN stack
* Mongo db (NoSQL db) for holding the database for medicines, patients....All the Entities
* Express.js framework for the Back-end
* React.js library for the Front-end (No framework used in Front-end)
* Node.js as a runtime environment (Not Vanilla JS)
Installed with Npm, Npx where all libraries are installed from there

## Features

We have 3 users in our Pharmacy (guest excluded) :
1. Admin
An Admin can view the uploaded documents of a new requested pharmacist and decide whether to hire him or not. In addition to viewing the requests of pharmacists to join the platform, administrator is also capable of viewing the basic information related to anyone on the system and decide to add/remove patients or pharmacists from the system or not. Furthermore, an admin can add new admins to the system, and has the right to check the total sales report of the pharmacy.

2. Pharmacist
A Pharmacist has the right to view all the medicines on the system with some details only a pharmacist can see like the available quantity left and the sales per medicine. Moreover, a hired pharmacist can edit medicine description, price, picture and archive whatever medicine he wants from the system (so a patient can not see it) as well as communicating with patients and doctors through chat or video calls.

3. Patient
A Patient is able to view the medicines available in the pharmacy (unarchived by the pharmacist) and add these medicines to the cart, choose the amount needed per medicine (as long as the quantity is valid), and add prescription medicines to his cart as well, but a related medicine prescription has to be attached to complete the process and the medicine gets added to the cart, and at the end the patient is able to place the order, and if he changes his mind due to any reason, he has the opportunity to cancel the order. In addition, a patient can choose to pay via credit card, cod or his account wallet, and also able to edit or add a new delivery address on the platform.

For a Guest :
A guest can request to join the platform as a pharmacist through registration and uploading the required doucuments. In case he got accepted (by the administrator), now he is officially a pharmacist on the system.
Moreover, a guest can join the platform as a patient through registration only, no documents to upload, just filling the registration form (name, enmaol, date of birth,...etc) and in case an admin accepts,
now that guest is considered a patient on the system.

## Code Examples

For Patient :-
- Method #1
<!--
const addtocart = (medicine)=>{
    const found = cart.find((med)=>med.name === medicine.name)
    if(found){
      if(CountMedicineInCart(medicine) < medicine.quantity){
        setCart([...cart, medicine]);
      }
      else{
        alert("No Enough Quantity");
      }
    }
    else{
      setCart([...cart, medicine]);
    }
  }
-->
-- Function is called with some medicine as a parameter, i want to add it to my cart, but i have to check
that the amount is valid, so if the count of this medicine in my cart less than the quantity available in pharmacy i add it, otherwise, it can not be added.

- Method #2
<!-- const removeAllfromcart = (medicine)=>{
    const newcart = cart.filter((med)=> med.name !== medicine.name);
    setCart(newcart);
} -->
-- I want to remove some Medicine from my cart, remove all the Amount of it, so simply i filter my cart and
only remain other medicines in the cart.

For Pharmacist :-
- Method #1
<!-- const addToArchivedMeds = (medicine) =>{ //viewing in patient remains
      medicine.archived = true;
      setArchivedMeds([...archivedMeds,medicine])
} -->
-- A Pharmacist wants to add some medicine to the archived medicines, so that medicine's archived attribute is set to true and the medicine is added to the list of archived medicines.
(when the archived attribute is set to true, in the file where the medicines the patient can see is listed, i check if any medicine's archived attribute is true, then it is not shown to the patient)

- Method #2
<!-- const removeFromArchivedMeds = (medicine) =>{
      medicine.archived = false;
      setArchivedMeds(archivedMeds.filter((med)=>med.name !== medicine.name))
} -->
-- A Pharmacist wants to remove some medicine from the archived medicines so the patient can see it again,
that medicine's archived attribute is set to false and the archived medicines array is filtered such that only other archived medicines remain in the array.

For Admin :-
- Method #1
<!-- const removePharmacist = (id) => {
    let arr = pharmacists.filter((pharmacist) => pharmacist.id !== id);
    setPharmacists(arr);
}; -->
-- An Admin wishes to remove some pharmacist from the system, so you pass that pharmacist id to the function and the pharmacists array is filtered, such that only other pharmacists remain in the system.

- Method #2
<!-- const removePatient = (id) => {
    let arr = patients.filter((patient) => patient.id !== id);
    setPatients(arr);
}; -->
-- An Admin wishes to remove some patient from the system, so you pass that patient id to the function and the patients array is filtered, such that only other patients remain in the system.

## Installation

1. Clone the repository.
2. Install dependencies.

## API References

If applicable, provide references to your API documentation.

## Tests

Explain how to run tests and provide any relevant information about testing.

## How to Use

Provide instructions on how to use your project.

## Contribute

Explain how others can contribute to your project.

## Credits

Give credit to those who contributed to the project or inspired you.

## License

Specify the license under which your project is distributed.
