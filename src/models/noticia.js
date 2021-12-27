import mongoose , {Schema} from "mongoose"

const noticiaSchema = new Schema({
    //1

    nombre:{
        required:true,
        type: String,
        maxlength: 50,
        minlength: 10
    },
    contrasena:{
        type: String,
        required:true,
        maxlength: 30,
        minlength: 5
    },
    administrador:{
        type: Boolean
    },
    email:{
        type: String,
        required:true,
    },

    //2

    titulo:{
        type:String,
        required:true
    },
    subTitulo:{
        type:String,
        required:true
    },
    imagenPrincipal:{
        type:String,
        required:true
    },
    desarrollo:{
        type:String,
        required:true,
    },
    autor:{
        type:String,
        required:true
    },
    categoria:{
        type:Number,
        required:true,
        minlength:1
    },
    fecha:{
        type: Date,
        required:true
    },
    fechaGuardar:{
        type:String,
        required:true
    }

    //3

})

const Noticia = mongoose.model("noticia",noticiaSchema)

export default Noticia