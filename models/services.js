module.exports = function (orm, db) {
    db.define('services', {
        service_id: {type: 'number', key: true},
        servicename: {type: 'text'}
    });
};
