import Cuenta from "../models/cuenta"

export const cuentaCtrl={}

cuentaCtrl.nuevocuenta = async (req,res)=>{
    try{
        const cuentaNueva = new Cuenta({
            nombre: req.body.nombre,
            contrasena: req.body.contrasena,
            administrador: req.body.administrador,
            email:req.body.email
        })
        await cuentaNueva.save()
        res.status(201).json({mensaje: 'Cuenta creada correctamente'})
    }catch(error){
        res.status(400).json({mensaje: 'Error al crear la cuenta'})
        console.log(error)
    }
    }

cuentaCtrl.traercuenta = async(req,res)=>{
    try{
        const traercuenta = await Cuenta.find()
        res.status(200).json(traercuenta)

    }catch(error){
        res.status(404).json({mensaje: 'No se encontraron las cuentas'})
    }
}

cuentaCtrl.obtenercuenta = async(req,res)=>{
    try{
        const obtenercuenta = await Cuenta.findById(req.params.id)
        res.status(200).json(obtenercuenta)
                 
    }catch(error){
        res.status(404).json({mensaje: 'No se encontro la cuenta'})
    }
}

cuentaCtrl.borrarcuenta = async(req,res)=>{
    try{
        await Cuenta.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje: "Se pudo eliminar la cuenta"})
                 
    }catch(error){
        res.status(404).json({mensaje: 'No se pudo borrar la cuenta'})
    }
}

cuentaCtrl.editarcuenta = async(req,res)=>{
    try{
        await Cuenta.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({mensaje: "Si se pudo editar la cuenta"})
                 
    }catch(error){
        res.status(404).json({mensaje: 'No se pudo editar la cuenta'})
    }
}
