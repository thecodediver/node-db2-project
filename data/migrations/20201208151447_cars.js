exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments()
    tbl.text("vin", 30).notNullable().unique()
    tbl.text("make", 30).notNullable()
    tbl.text("model", 30).notNullable()
    tbl.integer("mileage", 10).notNullable().defaultTo(0)
    tbl.text("transmission", 30)
    tbl.text("title_status")
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars")
}
