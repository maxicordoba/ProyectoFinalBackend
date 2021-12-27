import { Router } from "express";
import  {noticiaCtrl}  from "../controllers/noticias.controllers";

const router = Router();

router
  .route("/")
  .post(noticiaCtrl.nuevonoticia)
  .get(noticiaCtrl.traernoticia)

router
.route("/:id")
.get(noticiaCtrl.obtenernoticia)
.delete(noticiaCtrl.borrarnoticia)
.put(noticiaCtrl.editarnoticia);

export default router;
