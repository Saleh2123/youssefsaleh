POST http://[::]:3000/trpc/patient.setWallet
{
  "username": "_username",
  "wallet": 42
}

GET http://[::]:3000/trpc/patient.getWallet
[QueryStringParams]
input: "_username"
