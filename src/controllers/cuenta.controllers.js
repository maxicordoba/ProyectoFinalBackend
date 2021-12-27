import Cuenta from "../models/cuenta"

export const cuentaCtrl={}

cuentaCtrl.borrarcuenta = (req,res)=>{
    res.send("ALGUIEN QUIERE BORRAR")
}

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

    }catch(error){
        res.status(404).json({mensaje: 'No se encontro el producto'})
    }
}