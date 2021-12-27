import Noticia from "../models/noticia"

export const noticiaCtrl={}

noticiaCtrl.borrarnoticia = (req,res)=>{
    res.send("ALGUIEN QUIERE BORRAR")
}

noticiaCtrl.nuevonoticia = async (req,res)=>{
    try{
        const noticiaNueva = new Noticia({
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            imagenPrincipal: req.body.imagenPrincipal,
            desarrollo:req.body.desarrollo,
            autor: req.body.autor,
            tipo: req.body.tipo,
            fecha: req.body.fecha,
            fechaGuardar: req.body.fechaGuardar
        })
        await noticiaNueva.save()
        res.status(201).json({mensaje: 'Noticia creada correctamente'})
    }catch(error){
        res.status(400).json({mensaje: 'Error al crear el producto'})
        console.log(error)
    }
    }

noticiaCtrl.traernoticia = async(req,res)=>{
    try{

    }catch(error){
        res.status(404).json({mensaje: 'No se encontro el producto'})
    }
}