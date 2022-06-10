const mongoose=require("mongoose");
const url="mongodb+srv://admin:123@cluster0.nxrcee0.mongodb.net/?retryWrites=true&w=majority";

const connectdb= async()=>{
try{  await mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
/*   useFindAndModify: false,
    useCreateIndex: true*/
});

console.log("succfully connected to database");
}
catch(err){
    console.log(err);
   console.log("Error while connection to database");
}


}


module.exports=connectdb;