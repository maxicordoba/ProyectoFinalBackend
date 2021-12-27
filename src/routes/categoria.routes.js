import { Router } from "express";
import  {categoriaCtrl}  from "../controllers/categoria.controllers";

const router3 = Router();

router3
  .route("/")
  .post(categoriaCtrl.nuevocategoria)
  .get(categoriaCtrl.traercategoria)

export default router3;