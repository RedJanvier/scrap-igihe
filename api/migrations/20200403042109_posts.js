exports.up = (knex) =>
  knex.schema.createTable('posts', (table) => {
    table.increments('id');
    table.string('title').notNullable().unique();
    table.specificType('tags', 'VARCHAR(50)[]');
    table.specificType('images', 'VARCHAR(255)[]');
    table.string('body').notNullable();
    table.string('date').notNullable();
    table.string('front_image');
    table.string('url').notNullable();
  });

exports.down = (knex) => knex.schema.dropTable('posts');
