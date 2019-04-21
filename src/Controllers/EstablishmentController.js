const Establishment = require('../models/Establishment');

class EstablishmentController { 
    async index(req, res){
        const establishments = await Establishment.find();
        res.json(establishments);
    }

    async findEstablishmentById(req,res){
        const establishment = await Establishment.findById({
            _id: req.params.id
        });
        res.send(establishment);
    }

    async create(req, res){
        const establishment = await Establishment.create({
            Establishment: req.body.Establishment,
            Location: req.body.Location,
            Owner: req.body.Owner
        });
        res.json(establishment);
    }

    async delete(req,res){
        await Establishment.remove({
            _id: req.params.id
        });
        res.send({})
    }

    async update(req,res){
        const establishment = await Establishment.findOneAndUpdate(req.body.id, {
            Establishment: req.body.Establishment,
            Location: req.body.Location,
            Owner: req.body.Owner
        },
            {
                new: true
            }
        );
        res.json(establishment);
    }
}


module.exports = new EstablishmentController();