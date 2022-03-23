import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import userRoute from './Routers/userRoute';
import postRoute from './Routers/postRouter';
import errorHandler from './handleError';


//import Memebers from './data.json'



const app = express();

mongoose.connect(`${process.env.MONGODB_URI}`,()=> console.log('Connected to DB'))



app.use(express.json());

app.use('/api/user',userRoute,()=>console.log('api connected'));
app.use('/api/post',postRoute,()=>console.log('posts done'))
app.use('*', (req, res) => {
    res.status(404).json({
      success: 'false',
      message: 'Page not found',
      error: {
        statusCode: 404,
        message: 'You reached a route that is not defined on this server',
      },
    });
  });
  app.use('*',errorHandler);

app.listen(3000,()=>console.log('Listening to port 3000'));