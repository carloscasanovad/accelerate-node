import { Customer } from "../../domain/user/model/CustomerModel.js";
import httpStatus from "http-status";
var CustomerController = /** @class */ (function () {
    function CustomerController() {
    }
    CustomerController.prototype.createUser = function (req, res) {
        var customerInfo = req.body;
        var newCustomer = new Customer(customerInfo);
        return res
            .status(httpStatus.CREATED)
            .send({ status: "success", customer: newCustomer });
    };
    return CustomerController;
}());
export { CustomerController };
