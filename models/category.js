module.exports = function (orm, db) {
    db.define('category', {
        category_id: {type: 'number', key: true},
        name: {type: 'text'},
        unit: {type: 'text'},
        price: {type: 'text'}
    });
};
