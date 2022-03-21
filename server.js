var express = require("express")
var app = express()
var port = process.env.port || 3000;

/* app.use(express.statiic(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extended : false}));
 */
app.listen(port,()=>{
    console.log("Appnlistening to: "+port)
})