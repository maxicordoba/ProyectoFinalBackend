import { Router } from "express";
import  {noticiaCtrl}  from "../controllers/noticias.controllers";

const router = Router();

router
  .route("/")
  .post(noticiaCtrl.nuevonoticia)
  .get(noticiaCtrl.traernoticia)

//esto es nuevo y va oara trer un elemento en particular a partir de su id
router
.route("/:id")
.get(noticiaCtrl.obtenernoticia)
.delete(noticiaCtrl.borrarnoticia)
.put(noticiaCtrl.editarnoticia);

export default router;
