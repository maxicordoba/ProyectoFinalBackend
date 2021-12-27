import Noticia from "../models/noticia"

export const noticiaCtrl={}

const noticiaCtrl={}

noticiaCtrl.borrarnoticia = (req,res)=>{
    res.send("ALGUIEN QUIERE BORRAR")
}

noticiaCtrl.nuevonoticia = (req,res)=>{
    res.send("ALGUIEN QUIERE AGREGAR UN OBJETO")}

noticiaCtrl.traernoticia = (req,res)=>{
    res.send("TRAE LA NOTICIA")
}