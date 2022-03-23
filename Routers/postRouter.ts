import { createPost, deletePost, findPost, findPosts, updatePost} from '../Controllers/postController';
import {Router} from 'express';

import multer from 'multer';




const postRoute = Router();
const upload = multer({ dest: './uploads/' }) 

postRoute.post('/create',upload.single("image"),createPost);
postRoute.get('/',findPosts);
postRoute.get('/:id',findPost);
postRoute.put('/:id',updatePost);
postRoute.delete('/:id',deletePost);


export default postRoute;