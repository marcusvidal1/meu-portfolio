const express = require('express');
const cors = require('cors');

const app = express();
const porta = 3000;

app.use(cors());

// Dados do perfil para a página inicial
const dadosPerfil = {
    nome: "Marcus Vidal",
    descricao: "Sou aprendiz de programação apaixonado por tecnologia. Estou estudando front-end e criando meus primeiros projetos!",
    imagem: "https://i.imgur.com/SEU_LINK_AQUI.png", // Altere para um link válido da sua imagem
    redesSociais: {
        instagram: "https://instagram.com/seuUsuario",
        github: "https://github.com/seuUsuario",
        linkedin: "https://linkedin.com/in/seuUsuario",
        twitter: "https://twitter.com/seuUsuario"
    },
    introducao: {
        titulo: "Olá",
        subtitulo: "Meu perfil e projetos",
        sobreMim: "Sou um desenvolvedor iniciante apaixonado por tecnologia. Estou me especializando em programação, focado no desenvolvimento front-end de páginas web. Busco aprimorar minhas habilidades e aprender novas tecnologias para criar interfaces modernas e responsivas.<br><br> Estou sempre pronto para desafios e em constante evolução. 🚀💻",
        links: {
            curriculo: "#", // Atualize com o link do seu currículo
            projetos: "about.html"
        }
    }
};

// Dados dos projetos para a página de projetos
const projetos = [
    {
        titulo: "Secret Number",
        descricao: "Jogo interativo de adivinhação.",
        tecnologia: ["HTML", "CSS", "JavaScript"],
        imagem: "/assets/image_fx_ (14).jpg"
    },
    {
        titulo: "Jeep Wrangler",
        descricao: "Site dedicado ao Jeep Wrangler.",
        tecnologia: ["HTML", "CSS"],
        imagem: "/assets/image_fx_ (6).jpg"
    },
    {
        titulo: "Santos Futebol Clube",
        descricao: "Página dedicada ao Santos Futebol Clube.",
        tecnologia: ["HTML", "CSS", "JavaScript"],
        imagem: "/assets/image_fx_ (12).jpg"
    }
];

// Rota principal da API
app.get('/', (req, res) => {
    res.json({ mensagem: "API do Portfólio funcionando!" });
});

// Rota do perfil
app.get('/perfil', (req, res) => {
    res.json(dadosPerfil);
});

// Rota dos projetos
app.get('/projetos', (req, res) => {
    res.json(projetos);
});

// Inicializa o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em: http://localhost:${porta}`);
});
