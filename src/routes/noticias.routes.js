import { Router } from "express";
import  {noticiaCtrl}  from "../controllers/noticias.controllers";

const router = Router();

router
  .route("/")
  .delete(noticiaCtrl.borrarnoticia)
  .post(noticiaCtrl.nuevonoticia)
  .get(noticiaCtrl.traernoticia)

export default router;
