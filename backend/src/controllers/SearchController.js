const Dev = require('../models/Dev');
const parseStringAsArray = require('./utils/parseStringAsArray');

// Buscar todos os devs num raio de 10km
// Filtrar por tecnolgias

module.exports = {
    async index(req, res) {
     const { latitude, longitude, techs } = req.query;

     const techsArray = parseStringAsArray(techs);

     const devs = await Dev.find({
        techs: {
            $in: techsArray, 
        },

    /** Retirar esse código para retornar dev */
        location: {
            $near: {
                $geometry: {
                    type: 'Point',
                    coordinates: [longitude, latitude],
                },
                $maxDistance: 10000
            }
        }
        /** ************** */
     });

        return res.json({ devs });
    }
}