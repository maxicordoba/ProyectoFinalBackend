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

//desde aca hacer para lo demas este es el LISTAR TODOS los elementos
categoriaCtrl.traercategoria = async(req,res)=>{
    try{
        const traercategoria = await Categoria.find()
        res.status(200).json(traercategoria)

    }catch(error){
        res.status(404).json({mensaje: 'No se encontraron las categorias'})
    }
}
//traer un elemento en particular
categoriaCtrl.obtenercategoria = async(req,res)=>{
    try{
        const obtenercategoria = await Categoria.findById(req.params.id)
        res.status(200).json(obtenercategoria)
                 
    }catch(error){
        res.status(404).json({mensaje: 'No se encontro la categoria'})
    }
}

//esto es nuevo es borrar
categoriaCtrl.borrarcategoria = async(req,res)=>{
    try{
        await Categoria.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje: "Se pudo eliminar la categoria"})
                 
    }catch(error){
        res.status(404).json({mensaje: 'No se pudo borrar la categoria'})
    }
}
//esto es editar
categoriaCtrl.editarcategoria = async(req,res)=>{
    try{
        await Categoria.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({mensaje: "Si se pudo editar la categoria"})
                 
    }catch(error){
        res.status(404).json({mensaje: 'No se pudo editar la categoria'})
    }
}