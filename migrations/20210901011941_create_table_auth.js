
exports.up = function(knex) {
    return knex.schema.createTable('auth',(table)=>{
        table.increments('id').primary()
        table.string('user').notNull()
        table.string('password').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('auth')
};
