import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Posts extends BaseSchema {
  protected tableName = 'posts'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id') // auto-incrementing id
      table.timestamps(true, true) // true, true = created_at, updated_at
      table.string('title').notNullable() // string column varchar(255) not null
      table.string('slug').notNullable().unique() // string column varchar(255) not null
      table.text('content', 'longtext').notNullable() // longtext column not null
      table
        .integer('author_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE') // foreign key
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName) // drop table
  }
}
