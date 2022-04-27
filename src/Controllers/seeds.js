const knex = require('../connection')

const registerSeed = async (req, res) => {
    try {
        const seed = await knex('seeds').insert({ ...req.body });

        if (!seed.length) return res.status(400).json("Semente não cadastrada!")

        return res.status(200).json("Semente cadastrada!")
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

const listAllSeeds = async (req, res) => {
    const { sync } = req.body

    const seeds = await knex('seeds').select('seed_name', 'days_to_germinate').where('sync', sync);

    if (!seeds.length) return res.status(404).json('Não há nenhuma semente cadastrada')

    await knex('seeds').update({ sync: true })

    res.status(200).json(charges)
}

const editSeed = async (req, res) => {
    const { idParam } = req.params

    try {
        const seedToEdit = await knex('seeds').where('id', idParam);

        if (!seedToEdit) return res.status(404).json('Semente não encontrada')

        await knex('seeds').update({ ...req.body }).where('id', idParam)

    } catch (error) {
        return res.status(400).json(error.message)
    }
}

const deleteSeed = async (req, res) => {
    const { idParam } = req.params

    try {
        const seedToDelete = await knex('seeds').where('id', idParam).del()
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

module.exports = {
    registerSeed,
    listAllSeeds,
    editSeed,
    deleteSeed
}