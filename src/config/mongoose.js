const mongoose = require('mongoose');

const db_url = process.env.MONGODB_URI;

const connectMongooseDB = async () => {
  
  try {
    await mongoose.connect(
        db_url,
      // {
      //   useNewUrlParser: true,    
      //   useUnifiedTopology: true
      // }
    );
  } catch (err) {
    console.error(err.message);
    process.exit(1);
    
  }
  
};

module.exports = connectMongooseDB;
