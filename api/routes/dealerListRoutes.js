'use strict';
module.exports = function(app) {
    const dealerList = require('../controllers/dealerListController')

    // todoList Routes
    app.route('/dealers')
    .get(dealerList.list_all_dealers)
    .post(dealerList.create_a_dealer)

    app.route('/dealers/:dealerId')
    .get(dealerList.read_a_dealer)
    .put(dealerList.update_a_dealer)
    .delete(dealerList.delete_a_dealer)
}