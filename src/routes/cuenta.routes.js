import { Router } from "express";
import  {cuentaCtrl}  from "../controllers/cuenta.controllers";

const router2 = Router();

router2
  .route("/")
  .post(cuentaCtrl.nuevocuenta)
  .get(cuentaCtrl.traercuenta)

router2
.route("/:id")
.get(cuentaCtrl.obtenercuenta)
.delete(cuentaCtrl.borrarcuenta)
.put(cuentaCtrl.editarcuenta);

export default router2;