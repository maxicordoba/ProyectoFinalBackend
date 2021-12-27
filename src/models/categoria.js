import mongoose, {Schema} from "mongoose"

const categoriaSchema = new Schema ({
    categoria:{
        type:String,
    }
})

const Categoria = mongoose.model("categoria",categoriaSchema)

export default Categoria