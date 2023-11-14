interface _User {
  id: string;
  mode: number;
}

interface _Session {
  user: _User;
}

declare module "next-auth/types" {
  interface User extends _User {}
  interface Session {
    user: _User;
  }
}

export {};
