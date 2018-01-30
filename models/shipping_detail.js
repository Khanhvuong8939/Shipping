module.exports = function (orm, db) {
    db.define('shipping_detail', {
        detail_id: {type: 'number',key: true},
        type: {type: 'number'},
        weight: {type: 'number'},
        from: {type: 'number'},
        to: {type: 'number'},
        category: {type: 'number'},
        container: {type: 'number'},
        received_date: {type: 'number'}
    });
};
