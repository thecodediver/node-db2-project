exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars").del()
    .then(() => knex("cars").insert([
      {
        vin: "2398r2f98ru98u", make: "honda", model: "accord", mileage: 8739, transmission: "4 Cylander", title_status: "sold",
      },
      {
        vin: "ough924h8g9hefier", make: "ford", model: "truck", mileage: 67984, transmission: "6 Cylander", title_status: "stolen",
      },
      {
        vin: "28hfhr82y732yfr", make: "mazda", model: "3", mileage: 389475, transmission: "4 Cylander", title_status: "parked",
      },
    ]))
}
