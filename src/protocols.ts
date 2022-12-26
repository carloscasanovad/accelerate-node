import { IRoutesController } from "@routes/Controller";
import { Request, Response } from "express";

export type CustomerInfo = {
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
  controller: IRoutesController
) => (req: Request, res: Response) => Response;
