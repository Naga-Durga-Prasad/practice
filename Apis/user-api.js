const exp = require("express")
const userApi=exp.Router();
userApi.use(exp.json())
const errHandler=require("express-async-handler")

//cloudinary
const cloudinary=require("cloudinary").v2
const multer=require("multer")
const {CloudinaryStorage}=require("multer-storage-cloudinary")
//config cloudinary
cloudinary.config({
    cloud_name:"dplnv1vyk",
    api_key:"166191465281893",
    api_secret:"Hkf_raTMWsREuWPDi8LLehYXK2E"
});

////configure cloudinary storage
const clStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
        return {
            folder: 'CDB21DX003',
            public_key: file.fieldname + '-' + Date.now()
        }
    }
})
//configure multer
const multerObj=multer({storage: clStorage})

//middleware
// const checkToken =require("./middlewre/verifytoken")

//bcryptjs
const bcryptjs=require("bcryptjs")
//web token
const jwt=require("jsonwebtoken")












//read users using async and awit
userApi.get("/getuser", errHandler( async (req, res, next) =>{
    let userCollectionObject=req.app.get("userCollectionObject")
    let userlist= await userCollectionObject.find().toArray();
    res.send({message:userlist})
}))




// user by name usimg await
userApi.get("/getuser/:username", errHandler( async (req, res, next) => {
    let userCollectionObject=req.app.get("userCollectionObject")
let un=req.params.username
    let user=await userCollectionObject.findOne({username:un});
   
    if(user===null){
        res.send({message:"user not existed"})
    }
    else{
        res.send({message:user})
    }
}))



//create user by async
userApi.post('/createuser',multerObj.single("photo"),errHandler( async(req, res, next) => {
    let userCollectionObject=req.app.get("userCollectionObject")
     //get user object
     let newUser = JSON.parse(req.body.userObj)
     //check username is already existed
     let user=await userCollectionObject.findOne({ email: newUser.email })
     if(user===null){
         //hash password
         let hashedpassword=await bcryptjs.hash(newUser.password,9)
         //adding pasword
        newUser.password=hashedpassword;
        // adding cdn links
        newUser.profilePic=req.file.path;

       await userCollectionObject.insertOne(newUser)
            res.send({message:"User created"})
    }
    else{
        res.send({message:"user existed"})
    }
}))




//update user using async
userApi.put("/updateuser/:username",errHandler( async(req,res,next)=>{
    let userCollectionObject=req.app.get("userCollectionObject")
    let modifiedUser=req.body;
    let un=req.params.username;
    //check username is already existed
    let user=await userCollectionObject.findOne({ name: un })
    if(user===null){
      
           res.send({message:"User not existed"})
   }
   else{
       //hash password
       let hashedpassword=await bcryptjs.hash(modifiedUser.password,9)
       modifiedUser.password=hashedpassword;
        await userCollectionObject.updateOne({name:un},{$set:{...modifiedUser}})
       res.send({message:"user updated"})
     
   }
}))


// //delete user using async
// userApi.delete("/deleteuser/:username",errHandler( async(req,res,next)=>{
//     let userCollectionObject=req.app.get("userCollectionObject")
    
//     let un=req.params.username;
//     //check username is already existed
//     let user=await userCollectionObject.findOne({ name: un })
//     if(user===null){
      
//            res.send({message:"User not existed"})
//    }
//    else{
//      await userCollectionObject.deleteOne({name:un})
//        res.send({message:"user deleted"})
//    }
// }))

// //adding items to cart
// userApi.post("/addtocart",errHandler( async(req,res,next)=>{
//     let cartCollectionObject=req.app.get("cartCollectionObject")
//     //get user cart obj
//     let cartObj=req.body;
  

//     //find user in collection
//     let userInCart=await cartCollectionObject.findOne({username:cartObj.username})

//     //if user not existed
//     if(userInCart===null){
//         let products=[];
        
//         products.push(cartObj)
//         let newUserCollectionObject={username:cartObj.username,products:products}
//         //insert
//         await cartCollectionObject.insertOne(newUserCollectionObject)
//         res.send({message:"product added to cart "})
//     }

//     else{
//         userInCart.products.push(cartObj)
//         await cartCollectionObject.updateOne({username:cartObj.username},{$set:{...userInCart}})
//         res.send({message:"product added to cart "})
//     }
// }))

// //reading cart
// userApi.get("/getcart/:username",errHandler( async(req,res,next)=>{
//     let username=req.params.username
    
   
//     let cartCollectionObject=req.app.get("cartCollectionObject")
//     let userlist= await cartCollectionObject.findOne({username:username})
  
//     res.send({message:userlist})
// }))



//userlogin
userApi.post("/login",errHandler( async(req,res,next)=>{
    let userCollectionObject=req.app.get("userCollectionObject")
    let credentials=req.body;
    //verify user
    let user=await userCollectionObject.findOne({email:credentials.email})
    //if user not existed
    if(user===null){
        res.send({message:"invalid email"})
    }
    //user existed
      else{
    //compare password
    let result=await bcryptjs.compare(credentials.password,user.password)
    //if password not matched
    if(result===false){
        res.send({message:"invalid password"})
    }
    //if passsword matched
    else{
        //delete password from user
        delete user.password
        //create a token and send
        let token=await jwt.sign({username:credentials.username},"abcdef",{expiresIn:180})
       res.send({message:"login success",token:token,email:credentials.email,username:user.username,user:user})
    }
}}))

// count
userApi.get("/getcount/:username",errHandler( async(req,res,next)=>{
   
    let username=req.params.username

    let cartCollectionObject=req.app.get("cartCollectionObject")
    let userlist= await cartCollectionObject.findOne({username:username})
    
    let cart=[...userlist.products]
    let count=cart.length
    console.log(count)
    res.send({message:count})
}))


// //protected route
// userApi.post("/test",checkToken,errHandler( async(req,res,next)=>{

//     res.send({message:"this is protected"})

// }))


module.exports= userApi;