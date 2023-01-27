import { IEndPointController } from "@routes/Controller";
import { Request, Response } from "express";
import { ObjectId } from "mongodb";

export type ICustomerInfo = {
  _id?: ObjectId;
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
};

export type ControllerAdapterType = (
  controller: IEndPointController
) => (req: Request, res: Response) => Response | Promise<Response>;
