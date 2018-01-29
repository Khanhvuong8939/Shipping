module.exports = function (orm, db) {
	db.define('todo', {
		id:{type:'serial',key:true},
		job: { type: 'text' },
		add_date: { type: 'text'},
		user_id: {type:'number'}
		});
	};
