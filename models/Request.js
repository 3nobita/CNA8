const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    date: Date,
    driverId: String,
    driverName: String,
    cabNumber: String,
    passengerName: String,
    pickupLocation: String,
    dropoffLocation: String,
    pickupTime: String,
    dropoffTime: String,
    notes: String,
    distanceTraveled: String, // New field
    tollUsage: String // New field
});

module.exports = mongoose.model('Request', RequestSchema);
