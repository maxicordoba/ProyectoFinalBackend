import { Router } from "express";
import { productoCtrl } from "../controllers/producto.controllers";

const router = Router();

router
  .route("/")
  .delete(productoCtrl.borrarProducto)
  .post(productoCtrl.nuevoProducto)
  .get(productoCtrl.traerProducto);

export default router;
