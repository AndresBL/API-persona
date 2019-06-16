// server.js
import cors from 'cors';
import express from 'express';

import Persona from './src/controllers/PersonaController';

// initializing server
const app = express();

app.use (cors());

// static files
app.use (express.json());

app.get ('/', (req, res) => {
	return res.status(200).send({'message': 'YAY! Congratulations! Your endpoint is working'});
})

app.post ('/api/v1/personas', Persona.create);
app.get ('/api/v1/personas', Persona.getAll);
app.get ('/api/v1/personas/:id', Persona.getOne);
app.put ('/api/v1/personas/:id', Persona.update);
app.delete ('/api/v1/personas/:id', Persona.delete);


app.listen(4000);
console.log('app running on port ', 4000);