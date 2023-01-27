import { CustomerRepository } from "../../../persistence/repositories/CustomerRepository";
import { userMock } from "../../../utils/mocks/UserMock";

describe("CustomerRepository validation", () => {
  const customerRepository = new CustomerRepository();
  //TODO: validate created user on database
  it("should return the new customer inserted into database, when CustomerRepository is called", () => {
    const result = customerRepository.create(userMock);
    expect(result).toBeTruthy();
    expect(result).toEqual(userMock);
  });
});
