import { CustomerRepository } from "../../../domain/CustomerRepository";
import { userMock } from "../../../utils/mocks/UserMock";
import { CreateUserService } from "../CustomerService";

describe("CustomerService validation", () => {
  const customerRepository = new CustomerRepository();
  const customerService = new CreateUserService(customerRepository);
  it("should create a new user when function is called", () => {
    const spyCustomerRepository = jest
      .spyOn(CustomerRepository.prototype, "createUser")
      .mockReturnValueOnce(userMock);

    const result = customerService.execute(userMock);

    expect(result).toBeTruthy();
    expect(spyCustomerRepository).toHaveBeenCalled();
  });
});
