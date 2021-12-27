import Noticia from "../models/noticia"

export const noticiaCtrl={}

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
        res.status(400).json({mensaje: 'Error al crear la noticia'})
        console.log(error)
    }
    }


noticiaCtrl.traernoticia = async(req,res)=>{
    try{
        const traernoticia = await Noticia.find()
        res.status(200).json(traernoticia)

    }catch(error){
        res.status(404).json({mensaje: 'No se encontraron las noticias'})
    }
}

noticiaCtrl.obtenernoticia = async(req,res)=>{
    try{
        const obtenernoticia = await Noticia.findById(req.params.id)
        res.status(200).json(obtenernoticia)
                 
    }catch(error){
        res.status(404).json({mensaje: 'No se encontro la noticia'})
    }
}


noticiaCtrl.borrarnoticia = async(req,res)=>{
    try{
        await Noticia.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje: "Se pudo eliminar la noticia"})
                 
    }catch(error){
        res.status(404).json({mensaje: 'No se pudo borrar la noticia'})
    }
}

noticiaCtrl.editarnoticia = async(req,res)=>{
    try{
        await Noticia.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({mensaje: "Si se pudo editar la noticia"})
                 
    }catch(error){
        res.status(404).json({mensaje: 'No se pudo editar la noticia'})
    }
}