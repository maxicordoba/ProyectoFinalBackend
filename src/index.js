import express from "express"
import morgan from "morgan"
import cors from "cors"
import path from "path"
import router from "./routes/noticias.routes"
import router2 from "./routes/cuenta.routes"
import router3 from "./routes/categoria.routes"
import "./database"

const app = express()
app.set("port",process.env.PORT || 6000)

app.listen(app.get("port"),()=>{
  console.log("estoy en el puerto "+app.get("port"))
  console.log(path.join(__dirname,"../public"))
  })

 
app.use(morgan("dev")) 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"../public")))

app.use("/apinoticias",router)
app.use("/apicuenta",router2)
app.use("/apicategoria",router3)