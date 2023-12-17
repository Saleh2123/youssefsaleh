POST http://[::]:3000/trpc/medicine.update
{
  "id": "6582a7a19542c3d7cb5f6d2a",
  "name": "_name__updated",
  "description": "_description__updated",
  "price": 13,
  "use": "_use",
  "ingredients": ["_ingredient"],
  "quantity": 7
}

GET http://[::]:3000/trpc/medicine.find
[QueryStringParams]
input: "__updated"
