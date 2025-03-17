const express = require('express');
const cors = require('cors');

const app = express();
const porta = 3000;

app.use(cors());

//página inicial
const dadosPerfil = {
    nome: "Marcus Vidal",
    descricao: "Sou aprendiz de programação apaixonado por tecnologia.",
    imagem: "https://i.postimg.cc/kXNHF29g/foto.png",
    redesSociais: {
        instagram: {
            url: "https://instagram.com/seuUsuario",
            icone: "https://i.postimg.cc/DwBYHRSV/instagram.png"
        },
        github: {
            url: "https://github.com/marcusvidal1",
            icone: "https://i.postimg.cc/6p9mHB5L/github.png"
        },
        linkedin: {
            url: "https://linkedin.com/in/seuUsuario",
            icone: "https://i.postimg.cc/N0FPcbXK/linkedin.png"
        },
        twitter: {
            url: "https://twitter.com/seuUsuario",
            icone: "https://i.postimg.cc/GtwMvC5D/twitter.png"
        }
    },
    introducao: {
        titulo: "Olá",
        subtitulo: "Meu perfil e projetos",
        sobreMim: "Sou um desenvolvedor iniciante apaixonado por tecnologia. Estou me especializando em programação, focado no desenvolvimento front-end de páginas web. Busco aprimorar minhas habilidades e aprender novas tecnologias para criar interfaces modernas e responsivas.<br><br> Estou sempre pronto para desafios e em constante evolução. 🚀💻",
        links: {
            curriculo: "#",
            projetos: "about.html"
        }
    }
};



//página de projetos
const dadosProjetos = {
    titulo: "Projetos",
    descricao: "Bem-vindo à minha página de projetos! Aqui, compartilho minhas criações, desde sites interativos até designs inovadores. Cada projeto reflete minha paixão por tecnologia e criatividade, buscando sempre entregar experiências envolventes e funcionais."
};
const projetos = [
    {
        titulo: "Secret Number",
        descricao: "Um jogo interativo de adivinhação onde o jogador tenta descobrir um número secreto gerado aleatoriamente. Com dicas a cada palpite, o desafio fica ainda mais envolvente!",
        tecnologia: ["HTML", "CSS", "JavaScript"],
        imagem: "https://i.postimg.cc/nzQRsz0Z/image-fx-14.png"
    },
    {
        titulo: "Jeep Wrangler",
        descricao: "Uma página dedicada ao icônico Jeep Wrangler, destacando seu design robusto, desempenho off-road e tecnologia avançada para os amantes de aventura.",
        tecnologia: ["HTML", "CSS"],
        imagem: "https://i.postimg.cc/xjMpnXX3/image-fx-6.png"
    },
    {
        titulo: "Santos Futebol Clube",
        descricao: "Uma homenagem ao Santos FC, celebrando sua história, conquistas e paixão dos torcedores com um design envolvente e conteúdos especiais.",
        tecnologia: ["HTML", "CSS", "JavaScript"],
        imagem: "https://i.postimg.cc/brxmTB7B/image-fx-12.png"
    }
];

// Rota principal
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
