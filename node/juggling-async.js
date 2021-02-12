const bl=require('bl')
const http=require('http')
let res=[]
let n=0


function ress() {
    for(let i=0;i<3;i++)
    console.log(res[i])
}
function gethttp (r){
    http.get(process.argv[2+r],function(response){
response.pipe(bl(function(err,data){ 

    if(err)
    return console.log("AN ERROR HAS OCCURED",err)

res[r]=data.toString()
n ++
if(n==3)
ress()

}))

    })
}



 
for (let i=0;i<3;i++)
gethttp(i)