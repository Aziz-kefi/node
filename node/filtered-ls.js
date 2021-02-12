
var fs = require('fs')
var path = require('path')
const folder=process.argv[2]
const extansion='.'+process.argv[3]
fs.readdir(folder,function(err,nf){
    if(err) return console.error(err)
    nf.forEach(function(nf)
    {
        if(path.extname(nf)===extansion){
            console.log(nf)
        }
    })
})