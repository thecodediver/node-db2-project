const router = require("express").Router()

const CarsHelper = require("./cars-helper.js")

router.get("/", (req, res) => {
  CarsHelper.getCars()
    .then((data) => {
      res.status(200).json(data)
    })
})

router.delete("/:id", (req, res) => {
  CarsHelper.deleteCar(req.params.id)
    .then((data) => {
      res.status(200).json(data)
    })
})

router.post("/", (req, res) => {
  CarsHelper.createCar(req.body)
    .then((data) => {
      res.status(200).json(data)
    })
})

router.put("/", (req, res) => {
  CarsHelper.updateCar(req.body)
    .then((data) => {
      res.status(200).json(data)
    })
})

module.exports = router
