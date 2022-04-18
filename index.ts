import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import userRoute from './Routers/userRoute';
import postRoute from './Routers/postRouter';
import errorHandler from './handleError';
import cors from 'cors';
import path from 'path';

//import Memebers from './data.json'



const app = express();

mongoose.connect(`${process.env.MONGODB_URI}`,()=> console.log('Connected to DB'))


                 
app.use(express.static(path.join(__dirname)));
app.use(cors());
app.use(express.json());
app.use('/uploads',express.static('./uploads'));
app.use("/scripts", express.static(__dirname + '/scripts'));

app.use('/api/user',userRoute,()=>console.log('api connected'));
app.use('/api/post',postRoute,()=>console.log('posts done'))
app.use(errorHandler);

app.listen(process.env.PORT||5000,()=>console.log('Listening to port 5000'));