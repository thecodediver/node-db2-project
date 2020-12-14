const db = require("../dbConfig")

async function getCars() {
  return db("cars")
}

async function deleteCar(id) {
  return db("cars").where({ id }).del()
}

async function createCar(car) {
  return db("cars").insert(car).then((data) => db("cars").where({ id: data }))
}

async function updateCar(car) {
  return db("cars").where({ id: car.id }).update(car).then(() => db("cars").where({ id: car.id }))
    .first()
}

module.exports = {
  getCars,
  deleteCar,
  createCar,
  updateCar,
}
