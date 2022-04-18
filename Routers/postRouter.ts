import { createPost, deletePost, findUserPosts, findPosts, updatePost} from '../Controllers/postController';
import {Router} from 'express';

import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function(req, file, cb){
       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  

const postRoute = Router();
// const upload = multer({ storage: storage });  
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000 // 1000000 Bytes = 1 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|JPG|PNG)$/)) { 
       // upload only png and jpg format
       return cb(new Error('Please upload a Image'))
     }
   cb(null, true)
}
}) 

postRoute.post('/create',upload.single("image"),createPost);
postRoute.get('/',findPosts);
postRoute.get('/:id',findUserPosts);
postRoute.put('/:id',updatePost);
postRoute.delete('/:id',deletePost);


export default postRoute;