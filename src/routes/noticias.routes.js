import { Router } from "express";
import  {noticiaCtrl}  from "../controllers/noticias.controllers";

const router = Router();

router
  .route("/")
  .post(noticiaCtrl.nuevonoticia)
  .get(noticiaCtrl.traernoticia)

export default router;
