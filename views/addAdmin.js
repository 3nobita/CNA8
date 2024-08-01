const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust the path as necessary
require('dotenv').config();

const addAdminUser = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');

        // Check if the admin user already exists
        const existingAdmin = await User.findOne({ userId: 'admin' });
        if (existingAdmin) {
            console.log('Admin user already exists');
            return;
        }

        // Create admin user
        const adminUser = new User({
            userId: 'admin',
            name: 'Admin',
            role: 'admin',
            department: 'Administration',
            password: '123', // Change to hashed password for production
        });

        await adminUser.save();
        console.log('Admin user created');

    } catch (err) {
        console.error('Error adding admin user:', err);
    } finally {
        mongoose.connection.close();
    }
};

addAdminUser();
