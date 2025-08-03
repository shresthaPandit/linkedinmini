const User = require('../models/User');

// Get user profile
const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    
    // Validate userId
    if (!userId || userId === 'undefined') {
      return res.status(400).json({ 
        success: false,
        error: 'Invalid user ID provided' 
      });
    }

    const user = await User.findById(userId).select('-password');
    
    if (!user) {
      return res.status(404).json({ 
        success: false,
        error: 'User not found' 
      });
    }

    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Error in getUserProfile:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch user profile' 
    });
  }
};

// Update user profile
const updateProfile = async (req, res) => {
  try {
    const { name, bio } = req.body;
    
    if (!req.user || !req.user._id) {
      return res.status(401).json({ 
        success: false,
        error: 'User not authenticated' 
      });
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { name, bio },
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ 
        success: false,
        error: 'User not found' 
      });
    }

    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Error in updateProfile:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to update profile' 
    });
  }
};

module.exports = { getUserProfile, updateProfile };