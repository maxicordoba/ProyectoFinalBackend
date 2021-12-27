import mongoose , {Schema} from "mongoose"

const noticiaSchema = new Schema({
    //aqui va el codigo del archivo db.json
    //definir la estructura de la noticia
})

//cada vez que guarde una noticia, modifique, se guarda en el archivo Noticia

const Noticia = mongoose.model("noticia",noticiaSchema)

export default Noticia