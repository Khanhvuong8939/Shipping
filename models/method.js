module.exports = function (orm, db) {
    db.define('method', {
        method_id: {type: 'number', key: true},
        description: {type: 'text'}
    });
};
