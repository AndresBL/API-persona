import moment from 'moment';
import uuid from 'uuid';

class Persona {
    /**
    * class constructor
    * @param {object} data
    */
    constructor() {

        this.personas = [];
        this.create ({nombre:"Hugo", sexo:"Masculino", cumpleaños:"12/08/1999", direccion:"Aviación", matricula:"12315115133", telefono:"9531478965"});
        this.create ({nombre:"Isabel", sexo:"Femenino", cumpleaños:"14/02/1994", direccion:"Huajuapan", matricula:"1531132151", telefono:"9514778563"});
        this.create ({nombre:"luis", sexo:"Masculino", cumpleaños:"14/02/1987", direccion:"Acatlima", matricula:"15311sdgs1", telefono:"9514589632"});

    }
    /**
    * 
    * @returns {object} persona object
    */
    create(data) {

        const newPersona = {

            id: uuid.v4(),
            nombre: data.nombre || '',
            sexo: data.sexo || '',
            cumpleaños: data.cumpleaños || '',
            direccion: data.direccion || '',
            matricula: data.matricula || '',
            telefono: data.telefono || '',
            createdDate: moment.now(),
            modifiedDate: moment.now()
        };
        
        this.personas.push(newPersona);
        return newPersona;

    }
    /**
    * 
    * @param {uuid} id
    * @returns {object} persona object
    */
    findOne(id) {
        return this.personas.find(persona => persona.id === id);
    }
    /**
    * @returns {object} returns all personas
    */
    findAll() {
        return this.personas;
    }
    /**
    * 
    * @param {uuid} id
    * @param {object} data 
    */
    update(id, data) {

        const persona = this.findOne(id);
        const index = this.personas.indexOf(persona);
        this.personas[index].nombre = data['nombre'] || persona.nombre;
        this.personas[index].sexo = data['sexo'] || persona.sexo;
        this.personas[index].cumpleaños = data['cumpleaños'] || persona.cumpleaños;
        this.personas[index].direccion = data['direccion'] || persona.direccion;
        this.personas[index].matricula = data['matricula'] || persona.matricula;
        this.personas[index].telefono = data['telefono'] || persona.telefono;
        this.personas[index].modifiedDate = moment.now()
        return this.personas[index];

    }
    /**
    * 
    * @param {uuid} id 
    */
    delete(id) {

        const persona = this.findOne(id);
        const index = this.personas.indexOf(persona);
        this.personas.splice(index, 1);
        return {};

    }

}

export default new Persona();
