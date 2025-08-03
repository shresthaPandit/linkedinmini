const Post = require('../models/Post');

// Get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('author', 'name email bio')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: posts
    });
  } catch (error) {
    console.error('Error in getPosts:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch posts' 
    });
  }
};

// Create post
const createPost = async (req, res) => {
  try {
    const { content } = req.body;

    if (!content || !content.trim()) {
      return res.status(400).json({ 
        success: false,
        error: 'Post content is required' 
      });
    }

    if (!req.user || !req.user._id) {
      return res.status(401).json({ 
        success: false,
        error: 'User not authenticated' 
      });
    }

    const post = await Post.create({
      content: content.trim(),
      author: req.user._id
    });

    // Populate author details
    await post.populate('author', 'name email bio');

    res.status(201).json({
      success: true,
      data: post
    });
  } catch (error) {
    console.error('Error in createPost:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to create post' 
    });
  }
};

// Get user posts
const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    
    // Validate userId
    if (!userId || userId === 'undefined') {
      return res.status(400).json({ 
        success: false,
        error: 'Invalid user ID provided' 
      });
    }
    
    const posts = await Post.find({ author: userId })
      .populate('author', 'name email bio')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: posts
    });
  } catch (error) {
    console.error('Error in getUserPosts:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch user posts' 
    });
  }
};

module.exports = { getPosts, createPost, getUserPosts };