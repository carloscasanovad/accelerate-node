import { faker } from "@faker-js/faker";
import { customerSchema } from "../CustomerSchema";
import { userMock } from "../../../../utils/mocks/UserMock";

describe("CustomerSchema validation", () => {
  const generateValidInput = () => userMock;
  it("should return no error when input is valid", () => {
    const input = generateValidInput();
    const { error } = customerSchema.validate(input);

    expect(error).toBeUndefined();
  });

  describe("When email_confirmation is not the same as email", () => {
    it("should return erro when email_confirmation it's not given", () => {
      const input = generateValidInput();
      delete input.email_confirmation;

      const { error } = customerSchema.validate(input);

      expect(error).toBeDefined();
    });

    it("should return erron when email_confirmation is not the same as the email given", () => {
      const input = generateValidInput();
      input.email_confirmation = faker.internet.email("AnotherUser");

      const { error } = customerSchema.validate(input);

      expect(error).toBeDefined();
    });
  });

  describe("when email_sms or whatsapp are not valid", () => {
    it("should return error when email_sms or whatsapp are not given", () => {
      const input = generateValidInput();
      delete input.email_sms;
      delete input.whatsapp;

      const { error } = customerSchema.validate(input);
      expect(error).toBeDefined();
    });

    it("should return error when email_sms or whatsapp are not a boolean type", () => {
      const input = generateValidInput();

      const { error } = customerSchema.validate({
        ...input,
        whatsapp: faker.datatype.number(),
        email_sms: faker.datatype.array(),
      });
      expect(error).toBeDefined();
    });
  });
});
