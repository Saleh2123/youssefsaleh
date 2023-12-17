POST http://[::]:3000/trpc/medicine.archive
{
  "id": "6582a7a19542c3d7cb5f6d2a",
  "archived": true
}

GET http://[::]:3000/trpc/medicine.find
[QueryStringParams]
input: "__updated"
