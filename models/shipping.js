module.exports = function (orm, db) {
    db.define('shipping', {
        shipping_id: {type: 'number', key: true},
        detail_id: {type: 'number'},
        create_time: {type: 'number'},
        approved: {type: 'text'},
        ref_price: {type: 'text'},
        exact_price: {type: 'text'},
        ref_time: {type: 'number'},
        status: {type: 'number'},
        user_id: {type: 'number'},
        exact_time: {type: 'number'}
    });
};
