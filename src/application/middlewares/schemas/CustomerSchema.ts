import { ICustomerInfo } from "@/domain/customer/types/Customer";
import Joi from "joi";

export const customerSchema = Joi.object<ICustomerInfo>({
  full_name: Joi.string().required(),
  email: Joi.string().email().required(),
  email_confirmation: Joi.string().valid(Joi.ref("email")).required(),
  cpf: Joi.string().required(),
  cellphone: Joi.string().required(),
  birthdate: Joi.date().required(),
  email_sms: Joi.boolean().required(),
  whatsapp: Joi.boolean().required(),
  country: Joi.string().required(),
  city: Joi.string().required(),
  postal_code: Joi.string().required(),
  address: Joi.string().required(),
  number: Joi.number().required(),
});
