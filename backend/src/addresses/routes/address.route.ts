import { Router } from "express";
import {
  CreateAddressController,
  DeleteAddressController,
  GetAllAddressesController,
  UpdateAddressController,
} from "../controllers";

import { EnsureAuthenticated, validateResource } from "../../app";
import { createSchema, updateSchema } from "../schemas";

const addressesRoutes = Router();
const getAllAddressesController = new GetAllAddressesController();
const createAddressController = new CreateAddressController();
const deleteAddressController = new DeleteAddressController();
const updateAddressController = new UpdateAddressController();

const ensureAuthenticated = new EnsureAuthenticated();
addressesRoutes.use(ensureAuthenticated.execute);

addressesRoutes.get("/", getAllAddressesController.execute);
addressesRoutes.post(
  "/",
  validateResource(createSchema),
  createAddressController.execute,
);
addressesRoutes.patch(
  "/:id",
  validateResource(updateSchema),
  updateAddressController.execute,
);
addressesRoutes.delete("/:id", deleteAddressController.execute);

export { addressesRoutes };
