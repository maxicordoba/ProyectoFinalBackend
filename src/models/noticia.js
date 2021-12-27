import mongoose , {Schema} from "mongoose"

const noticiaSchema = new Schema({
    nombre:{
        requeride:true,
        type: String,
        maxlength: 50,
        minlength: 10
    }
})

//cada vez que guarde una noticia, modifique, se guarda en el archivo Noticia

const Noticia = mongoose.model("noticia",noticiaSchema)

export default Noticia