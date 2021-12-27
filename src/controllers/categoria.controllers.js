import Categoria from "../models/categoria"

export const categoriaCtrl={}

categoriaCtrl.borrarcategoria = (req,res)=>{
    res.send("ALGUIEN QUIERE BORRAR")
}

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

    }catch(error){
        res.status(404).json({mensaje: 'No se encontro la categoria'})
    }
}