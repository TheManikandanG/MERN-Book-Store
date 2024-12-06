const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");
const path=require('path')

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/books", bookRoutes);

console.log();


if(process.env.NODE_ENV == "production"){
  app.use(express.static(path.join(__dirname,'..',"/client/dist")))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client/dist','index.html'))
  })
}
 

const PORT = process.env.PORT;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
