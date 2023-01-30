import { CustomerRepository } from "@/domain/customer/infrastructure/CustomerRepository";
import { userMock } from "../../../utils/mocks/UserMock";
import { CustomerService } from "../CustomerService";

describe("CustomerService validation", () => {
  const customerRepository = new CustomerRepository();
  const customerService = new CustomerService(customerRepository);
  it("should create a new user when function is called", () => {
    const spyCustomerRepository = jest
      .spyOn(CustomerRepository.prototype, "createUser")
      .mockReturnValueOnce(userMock);

    const result = customerService.createCustomer(userMock);

    expect(result).toBeTruthy();
    expect(spyCustomerRepository).toHaveBeenCalled();
  });
});
