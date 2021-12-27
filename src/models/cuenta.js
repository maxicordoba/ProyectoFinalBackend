import mongoose, {Schema} from "mongoose"

const cuentaSchema = new Schema ({
    nombre:{
        required:true,
        type: String,
        maxlength: 150,
        minlength: 1
    },
    contrasena:{
        type: String,
        required:true,
        maxlength: 150,
        minlength: 1
    },
    administrador:{
        type: Boolean
    },
    email:{
        type: String,
        required:true,
    }
})

const Cuenta = mongoose.model("cuenta",cuentaSchema)

export default Cuenta