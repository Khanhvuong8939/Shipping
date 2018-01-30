module.exports = function (orm, db) {
    db.define('country', {
        country_id: {type: 'number', key: true},
        name: {type: 'text'}
    });
};
