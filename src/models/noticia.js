import mongoose , {Schema} from "mongoose"

const noticiaSchema = new Schema({
    titulo:{
        type:String,
        
    },
    subTitulo:{
        type:String,
        
    },
    imagenPrincipal:{
        type:String,
        
    },
    desarrollo:{
        type:String,
    },
    autor:{
        type:String,
        
    },
    tipo:{
        type:Number,
        minlength:1
    },
    fecha:{
        type: Date,
        
    },
    fechaGuardar:{
        type:String,
    }
})

const Noticia = mongoose.model("noticia",noticiaSchema)

export default Noticia