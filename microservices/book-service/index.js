const server = require("./src/app");
server.listen(process.env.PORT,()=>{
    console.log("📚 Book service started");
})