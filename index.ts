import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import userRoute from './Routers/userRoute';
import postRoute from './Routers/postRouter';
import errorHandler from './handleError';
import cors from 'cors';
import path from 'path';
const server = require('http').createServer();

//import Memebers from './data.json'



const app = express();

mongoose.connect(`${process.env.MONGODB_URI || "mongodb://localhost/user1"}`,()=> console.log('Connected to DB'))


                 
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());
app.use('/uploads',express.static('./uploads'));

app.use('/api/user',userRoute,()=>console.log('api connected'));
app.use('/api/post',postRoute,()=>console.log('posts done'))
app.use(errorHandler);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).send('Internal server error')
  })

server.listen(`${process.env.Port}`, () => console.log(`listening to port ${process.env.Port}`))