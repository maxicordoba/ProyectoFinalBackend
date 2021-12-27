import Categoria from "../models/categoria"

export const categoriaCtrl={}

categoriaCtrl.nuevocategoria = async (req,res)=>{
    try{
        const categoriaNueva = new Categoria({
            categoria: req.body.categoria
        })
        await categoriaNueva.save()
        res.status(201).json({mensaje: 'Categoria creada correctamente'})
    }catch(error){
        res.status(400).json({mensaje: 'Error al crear la categoria'})
        console.log(error)
    }
    }


categoriaCtrl.traercategoria = async(req,res)=>{
    try{
        const traercategoria = await Categoria.find()
        res.status(200).json(traercategoria)

    }catch(error){
        res.status(404).json({mensaje: 'No se encontraron las categorias'})
    }
}

categoriaCtrl.obtenercategoria = async(req,res)=>{
    try{
        const obtenercategoria = await Categoria.findById(req.params.id)
        res.status(200).json(obtenercategoria)
                 
    }catch(error){
        res.status(404).json({mensaje: 'No se encontro la categoria'})
    }
}


categoriaCtrl.borrarcategoria = async(req,res)=>{
    try{
        await Categoria.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje: "Se pudo eliminar la categoria"})
                 
    }catch(error){
        res.status(404).json({mensaje: 'No se pudo borrar la categoria'})
    }
}

categoriaCtrl.editarcategoria = async(req,res)=>{
    try{
        await Categoria.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({mensaje: "Si se pudo editar la categoria"})
                 
    }catch(error){
        res.status(404).json({mensaje: 'No se pudo editar la categoria'})
    }
}