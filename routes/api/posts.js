const express =require('express');
const { Error } = require('mongoose');
const router = express.Router();
//posts model

const Posts =require('../../models/Post');

//@router GET api/posts
// @desc GET All post

router.get('/',async (req,res) => {
    
    try {
        const posts =await Posts.find();
        if(!posts)throw Error('No items');
        res.status(200).json(posts);
    } catch (err) {
        res.status(400).json({msg:err})
    }

    });



    //@router GET api/posts/:id
// @desc GET An  post

router.get('/:id',async (req,res) => {    
    try {
        const post =await Posts.findById(req.params.id);
        if(!post)throw Error('No items');
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({msg:err})
    }
    });



//@router Post api/posts
// @desc create an post

router.post('/',async (req,res) => {
    // res.send("let's create post");
    // console.log(req.body);
    const newPost = new Posts(req.body);

    try {
        const post =await newPost.save();
        if(!post)throw Error('Something went wrong while  saving the post');

        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({msg:err})
    }
    });


    //@router DELETE api/posts/id
// @desc delete an post

router.delete('/:id',async (req,res) => {
        try {
        const post = await Posts.findByIdAndDelete(req.params.id);
        if(!post) throw Error('No post found!');

        res.status(200).json({ success : true})
    } catch (err) {
         res.status(400).json({msg:err})
    }     
    });

        //@router update api/posts/id
    // @desc update an post

    router.patch('/:id',async (req,res) => {
        try {
        const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
        if(!post) throw Error('Some went wrong while updating the post');

        res.status(200).json({ success : true});
    } catch (err) {
         res.status(400).json({msg:err})
    }     
    });


    module.exports=router;