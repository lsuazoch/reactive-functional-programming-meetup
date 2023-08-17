const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const movies = [
    { id: 1, title: 'El Padrino' },
    { id: 2, title: 'Pulp Fiction' },
    { id: 3, title: 'La lista de Schindler' },
    { id: 4, title: 'El señor de los anillos: El retorno del rey' },
    { id: 5, title: 'Matrix' },
    { id: 6, title: 'Forrest Gump' },
    { id: 7, title: 'Titanic' },
    { id: 8, title: 'Gladiador' },
    { id: 9, title: 'Jurassic Park' },
    { id: 10, title: 'El Gran Pez' },
    { id: 11, title: 'Star Wars: El imperio contraataca' },
    { id: 12, title: 'El club de la pelea' },
    { id: 13, title: 'Braveheart' },
    { id: 14, title: 'Salvar al soldado Ryan' },
    { id: 15, title: 'El resplandor' }
];


app.use(cors()); // Permitir solicitudes CORS

app.get('/search', (req, res) => {
    const query = req.query.q;
    if (!query) {
        return res.json([]);  // Devuelve una lista vacía si no hay consulta
    }
    const filtered = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
    res.json(filtered);
});

app.listen(3100, () => {
    console.log('Server running on http://localhost:3100/');
});