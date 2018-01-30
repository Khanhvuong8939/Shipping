module.exports = function (orm, db) {
    db.define('user', {
        user_id: {type: 'number',key: true},
        username: {type: 'text'},
        email: {type: 'text'},
        dob: {type: 'number'},
        status: {type: 'number'},
        phone: {type: 'number'},
        place_id: {type: 'number'},
        firstname: {type: 'text'},
        lastname: {type: 'text'},
        create_time: {type: 'number'},
        type: {type: 'number'}
    });
};
