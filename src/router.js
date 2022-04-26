const express = require('express')

const {
    listAllSeeds,
    detailSeed,
    registerSeed,
    editSeed,
    deleteSeed } = require('./Controllers/seeds')

const routes = express()

// GET SEMENTES
routes.get('/seeds', listAllSeeds)
routes.get('/seeds/:idParam', detailSeed)

// UPSERT SEMENTES
routes.post('/seeds', registerSeed)
routes.put('/seeds/:idParam', editSeed)

// DELETE SEMETNES
routes.delete('/seeds/:idParam', deleteSeed)

module.exports = routes