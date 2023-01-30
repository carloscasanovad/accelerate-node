import { ICustomerInfo } from "@/domain/customer/types/Customer";

export class Customer {
  full_name: string;
  email: string;
  email_confirmation: string;
  cpf: string;
  cellphone: string;
  birthdate: Date;
  email_sms: boolean;
  whatsapp: boolean;
  country: string;
  city: string;
  postal_code: string;
  address: string;
  number: number;
  constructor(body: ICustomerInfo) {
    this.full_name = body.full_name;
    this.email = body.email;
    this.email_confirmation = body.email_confirmation;
    this.cpf = body.cpf;
    this.cellphone = body.cellphone;
    this.birthdate = body.birthdate;
    this.email_sms = body.email_sms;
    this.whatsapp = body.whatsapp;
    this.country = body.country;
    this.city = body.city;
    this.postal_code = body.postal_code;
    this.address = body.address;
    this.number = body.number;
  }
}
