import express from 'express';
import Post from '../Models/post';
import User from '../Models/user';

const createPost = async (req : express.Request, res : express.Response) =>{
    const post =await Post.create({...req.body,image: req.file?.path}); 
    res.send(post);
};

const updatePost =async (req : express.Request, res : express.Response)=>{
    const { id } = req.params;
    const { body, image,user,date } = req.body;
    const post =await Post.findByIdAndUpdate(id,{body},{new:true});

    res.send(post);
}

const deletePost =async (req : express.Request, res : express.Response)=>{
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);

    res.send(post);
}

const findUserPosts =async (req : express.Request, res : express.Response)=>{
    const {id} = req.params; 
    const result = await User.findById(id).populate("posts");
    res.send(result.posts);
};

const findPosts =async (req : express.Request, res : express.Response)=>{
     
    const posts =await Post.find({}); 
    res.send(posts);
};


export {createPost, updatePost, deletePost,findPosts,findUserPosts }