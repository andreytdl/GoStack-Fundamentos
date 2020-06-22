const express = require('express');
const { uuid } = require('uuidv4');
const cors = require('cors');

const app = express();

app.use(cors());

//Se não ele irá dar undefined para todos os Jsons
app.use(express.json());

const projects = [];

app.get('/projects', (req, res) => {
    res.json(projects)
})

app.post("/projects", (request, response) => {
    //Recebendo as informações do repositório a ser cadastrado
    const {url, title, owner} = request.body;
    
    //Criando o novo repositório
    const project = { id: uuid(), url, title, owner};

    //Inserindo o novo repositório na lista
    projects.push(project);

    //Retornando o repositório cadastrado
    return response.json(project);
});
  

app.listen(3333, () => {
    console.log("Servidor inicializado 🚀")
});

