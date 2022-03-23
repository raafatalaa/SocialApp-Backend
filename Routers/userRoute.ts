import { createUser, deleteUser, findUser, findUsers, updateUser } from '../Controllers/userController';
import {Router} from 'express';



const userRoute = Router();


userRoute.post('/create',createUser);
userRoute.get('/',findUsers);
userRoute.get('/:id',findUser)
userRoute.patch('/:id',updateUser);
userRoute.put('/:id',updateUser);
userRoute.delete('/:id',deleteUser);


userRoute.put('/:id',updateUser)

userRoute.delete('/:id',deleteUser)

export default userRoute;