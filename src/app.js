const express = require ("express");
const path = require ("path");

const app = express();

app.use(express.static("public"));

app.get("/" , (req , res) => {
    
    const rutaCompleta = path.join(__dirname , "/views/home.html");
    res.sendFile(rutaCompleta);

});

app.get("/login" , (req , res) => {
    
    const rutaCompleta = path.join(__dirname , "/views/login.html");
    res.sendFile(rutaCompleta);

});

app.get("/register" , (req , res) => {
    
    const rutaCompleta = path.join(__dirname , "/views/register.html");
    res.sendFile(rutaCompleta);

});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Servidor funcionando en el puerto " + port) ;
});