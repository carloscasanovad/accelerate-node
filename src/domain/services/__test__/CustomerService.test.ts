import { CustomerRepository } from "../../../persistence/repositories/CustomerRepository";
import { userMock } from "../../../utils/mocks/UserMock";
import { CreateCustomerService } from "../CreateCustomerService";

describe("CustomerService validation", () => {
  const customerRepository = new CustomerRepository();
  const customerService = new CreateCustomerService(customerRepository);
  it("should create a new user when function is called", () => {
    const spyCustomerRepository = jest
      .spyOn(CustomerRepository.prototype, "createUser")
      .mockReturnValueOnce(userMock);

    const result = customerService.create(userMock);

    expect(result).toBeTruthy();
    expect(spyCustomerRepository).toHaveBeenCalled();
  });
});
