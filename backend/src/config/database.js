const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('Connecting to MongoDB...');
    console.log('MongoDB URI:', process.env.MONGODB_URI || 'mongodb://localhost:27017/linkedin-mini');
    
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/linkedin-mini', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ Database connection error:', error.message);
    console.error('Please make sure MongoDB is running and accessible');
    console.error('You can start MongoDB with: mongod');
    process.exit(1);
  }
};

module.exports = connectDB;