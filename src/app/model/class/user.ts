// user.model.ts
export class User {
  name: string;
  email: string;
  login:string;
  type: string;
  companyCode: string; // optionnel, seulement si le rôle est 'employe'
  password: string;


  constructor(
    name: string,
    email: string,
    type: string,
    companyCode: string,
    password: string,

  ) {
    this.name = name;
    this.email = email;
    this.login = this.email;
    this.type = type;
    this.companyCode = companyCode;
    this.password = password;

  }
}

export interface Login {
  login: string;
  password: string;
}

export interface Transfer {
  tndAmount: number;
  ctAmount: number;
}

export interface Transaction {
  id: number;
  name: string;
  icon: string;
  subtext: string;
  date: string;
  category: string;
  status: string;
  amount: number;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  type: string;
  balance: number;
  companyCode: string; // optionnel, seulement si le rôle est 'employe'
  password: string;
  confirmPassword: string;
  termsAccepted: boolean;
}
