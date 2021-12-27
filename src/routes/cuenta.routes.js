import { Router } from "express";
import  {cuentaCtrl}  from "../controllers/cuenta.controllers";

const router2 = Router();

router2
  .route("/")
  .post(cuentaCtrl.nuevocuenta)
  .get(cuentaCtrl.traercuenta)

export default router2;