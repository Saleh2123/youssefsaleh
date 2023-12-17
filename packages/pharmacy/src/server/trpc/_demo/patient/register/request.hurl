POST http://[::]:3000/trpc/patient.register
{
  "username": "_username",
  "name": "_name",
  "email": "_email@example.com",
  "password": "_password",
  "birthYear": "1970",
  "birthMonth": "1",
  "birthDay": "1",
  "gender": "_gender",
  "mobileNumber": "0000",
  "emergencyContact": {
    "fullName": "_emergencyContact.fullName",
    "relation": "_emergencyContact.relation",
    "emergencyMobile": "1111"
  }
}
