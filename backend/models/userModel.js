const mongoose =require ('mongoose');

const userSchema=mongoose.Schema({
    name :{type:String ,required:true},
    email :{type : String ,required :true},
    password:{ type: String ,required : true},
    pic: { 
        type : String ,
        required:true,
        default: "https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_1280.png",
        },
},
{
    timestamp : true
});

const User=mongoose.model("User",userSchema);

module.exports=User;