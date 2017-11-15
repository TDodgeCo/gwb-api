'use strict';

const mongoose = require('mongoose'),
    Dealer = mongoose.model('Dealers')

exports.list_all_dealers = function(req, res) {
    Dealer.find({}, function(err, dealer) {
        if (err) {
            res.send(err)
        }
        res.json(dealer)
    })
}

exports.create_a_dealer = function(req, res) {
    var new_dealer = new Dealer(req.body)
    new_dealer.save(function(err, dealer) {
        if (err) {
            res.send(err)
        }
        res.json(dealer)
    })
}

exports.read_a_dealer = function(req, res) {
    Dealer.findById(req.params.dealerId, function(err, dealer) {
        if (err) {
            res.send(err)
        }
        res.json(dealer)
    })
}

exports.update_a_dealer = function(req, res) {
    Dealer.findOneAndUpdate({_id: req.params.dealerId}, req.body, {new: true}, function(err, dealer) {
        if (err) {
            res.send(err)
        }
        res.json(dealer)
    })
}

exports.delete_a_dealer = function(req, res) {
    Dealer.remove({_id: req.params.dealerId}, function(err, dealer) {
        if (err) {
            res.send(err)
        }
        res.json({ message: 'Dealer successfully deleted'})
    }) 
}