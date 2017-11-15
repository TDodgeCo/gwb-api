'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema

var DealerSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter the name of the task'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    address1: {
        type: String,
        required: 'Please enter your street address'
    },
    address2: {
        type: String,
    },
    city: {
        type: String,
        required: 'Please enter the city you are located in'
    },
    state: {
        type: String,
        required: 'Please enter the state that you are located in'
    },
    postal_code: {
        type: Number,
        required: 'Please enter the postal code'
    },
    phone1: {
        type: Number,
        required: 'Please enter a contact number for your business'
    },
    phone2: {
        type: Number
    },
    fax: {
        type: Number
    },
    email: {
        type: String,
        required: 'Please enter an email address'
    },
    services: [{
        erection: Boolean,
        concrete: Boolean,
        grading: Boolean,
        electrical: Boolean,
        plumbing: Boolean,
        commercial: Boolean,
        residential: Boolean,
        agricultural: Boolean
    }],
    status: {
        type: [{
            type: String,
            enum: ['pending', 'unverified', 'trusted']
        }],
        default: ['unverified']
    }
})

module.exports = mongoose.model('Dealers', DealerSchema)