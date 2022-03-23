import express from 'express';
import Post from '../Models/post';

const createPost = async (req : express.Request, res : express.Response) =>{
    const post =await Post.create({...req.body,image: req.file?.path}); 
    res.send(post);
};

const updatePost =async (req : express.Request, res : express.Response)=>{
    const { id } = req.params;
    const { body, image,user,date } = req.body;
    const post =await Post.findByIdAndUpdate(id,{...req.body},{new:true});

    res.send(Post);
}

const deletePost =async (req : express.Request, res : express.Response)=>{
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);

    res.send(post);
}

const findPost =async (req : express.Request, res : express.Response)=>{
    const {id} = req.params; 
    const post =await Post.findById(id); 
    res.send(post);
};

const findPosts =async (req : express.Request, res : express.Response)=>{
     
    const post =await Post.findById({}); 
    res.send(post);
};


export {createPost, updatePost, deletePost,findPosts,findPost}