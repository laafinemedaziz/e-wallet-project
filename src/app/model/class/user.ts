// user.model.ts
export class User {
  name: string;
  email: string;
  type: string;
  companyCode: string; // optionnel, seulement si le rôle est 'employe'
  password: string;
  confirmPassword: string;
  termsAccepted: boolean;

  constructor(
    name: string,
    email: string,
    type: string,
    companyCode: string,
    password: string,
    confirmPassword: string,
    termsAccepted: boolean
  ) {
    this.name = name;
    this.email = email;
    this.type = type;
    this.companyCode = companyCode;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.termsAccepted = termsAccepted;
  }
}

export interface Login {
  email: string;
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
