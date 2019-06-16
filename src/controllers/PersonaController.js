import PersonaModel from '../models/Persona';

const Persona = {
    /**
    * 
    * @param {object} req 
    * @param {object} res
    * @returns {object} persona object 
    */
    create(req, res) {
        
        if (!req.body.nombre && !req.body.sexo && !req.body.cumpleaños && !req.body.direccion && !req.body.matricula && !req.body.telefono) {
          return res.status(400).send({'message': 'All fields are required'})
        }
        const persona = PersonaModel.create(req.body);
        return res.status(201).send(persona);

    },
    /**
    * 
    * @param {object} req 
    * @param {object} res 
    * @returns {object} personas array
    */
    getAll(req, res) {

        const personas = PersonaModel.findAll();
        return res.status(200).send(personas);

    },
    /**
    * 
    * @param {object} req 
    * @param {object} res
    * @returns {object} persona object
    */
    getOne(req, res) {

        const persona = PersonaModel.findOne(req.params.id);
        if (!persona) {
          return res.status(404).send({'message': 'persona not found'});
        }
        return res.status(200).send(persona);

    },
    /**
    * 
    * @param {object} req 
    * @param {object} res 
    * @returns {object} updated persona
    */
    update(req, res) {

        const persona = PersonaModel.findOne(req.params.id);
        if (!persona) {
          return res.status(404).send({'message': 'persona not found'});
        }
        const updatedPersona = PersonaModel.update(req.params.id, req.body)
        return res.status(200).send(updatedPersona);

    },
    /**
    * 
    * @param {object} req 
    * @param {object} res 
    * @returns {void} return statuc code 204 
    */
    delete(req, res) {

        const persona = PersonaModel.findOne(req.params.id);
        if (!persona) {
          return res.status(404).send({'message': 'persona not found'});
        }
        const ref = PersonaModel.delete(req.params.id);
        return res.status(204).send(ref);
        
    }
    
}

export default Persona;