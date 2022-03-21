import { Schema, model, syncIndexes } from 'mongoose';


const userSchema = new Schema({
    name: { type: String , required : [true, "Please Enter User Name"] },
    email: { type: String, unique: true , required : [true, "Please Enter User Name"]},
    password: { type: String , required : [true, "Please Enter User Name"] }, 
    createdAt:{ type : Date, default:Date.now}
})


const User = model('User', userSchema);


export default User;