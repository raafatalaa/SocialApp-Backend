import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import userRoute from './Routers/userRoute';
import postRoute from './Routers/postRouter';


//import Memebers from './data.json'



const app = express();

mongoose.connect(`${process.env.MONGODB_URI}`,()=> console.log('Connected to DB'))


app.use(express.json());

app.use('/api/user',userRoute,()=>console.log('api connected'));
app.use('/api/post',postRoute,()=>console.log('posts done'))
//app.use('/api/todo',route)


app.listen(3000,()=>console.log('Listening to port 3000'));