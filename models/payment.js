module.exports = function (orm, db) {
    db.define('payment', {
        payment_id: {type: 'number', key: true},
        method_id: {type: 'number'},
        shipping_id: {type: 'number'},
        create_time: {type: 'number'},
        status: {type: 'number'}
    });
};
