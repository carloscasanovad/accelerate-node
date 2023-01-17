import { Customer } from "@/domain/user/model/CustomerModel";
import { faker } from "@faker-js/faker";

const fakeEmail = faker.internet.email();

export const userMock: Customer = {
  full_name: faker.name.fullName(),
  email: fakeEmail,
  email_confirmation: fakeEmail,
  cpf: faker.random.word(),
  cellphone: faker.phone.number(),
  birthdate: faker.date.birthdate(),
  email_sms: false,
  whatsapp: true,
  country: faker.address.country(),
  city: faker.address.cityName(),
  postal_code: faker.address.zipCode(),
  address: faker.address.streetAddress(),
  number: faker.datatype.number(),
};
