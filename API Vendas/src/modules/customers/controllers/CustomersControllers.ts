import { NextFunction, Request, response, Response } from "express";
import ShowCustomerService from "../service/ShowCustomerService";
import CreateCustomerService from "../service/CreateCustomerService";
import UpdateCustomerService from "../service/UpdateCustomerService";
import DeleteCustomerService from "../service/DeleteCustomerService";
import ListCustomerService from "../service/ListCustomerService";

export default class CustomersController {
  public async index(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const listCustomers = new ListCustomerService();
      const customers = await listCustomers.execute();
      return response.json(customers);
    } catch (err) {
      next(err);
    }
  }


  public async show(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = request.params;
      const showCustomer = new ShowCustomerService();
      const customer = await showCustomer.execute({ id });
      return response.json(customer);
    } catch (err) {
      next(err);
    }
  }


  public async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { name, email } = request.body;
      const createCustomer = new CreateCustomerService();
      const customer = await createCustomer.execute({ name, email });
      return response.json(customer);
    } catch (err) {
      next(err);
    }
  }


  public async update(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { name, email } = request.body;
      const { id } = request.params;
      const updateCustomer = new UpdateCustomerService();
      const customer = await updateCustomer.execute({ id, name, email });
      return response.json(customer);
    } catch (err) {
      next(err);
    }
  }


  public async delete(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = request.params;
      const deleteCustomer = new DeleteCustomerService();
      await deleteCustomer.execute({ id });
      return response.json([]);
    } catch (err) {
      next(err);
    }
  }
}
