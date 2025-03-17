document.addEventListener("DOMContentLoaded", function () {
    const botaoTema = document.getElementById("botao-tema");

    // Verifica o tema salvo no localStorage e aplica
    if (localStorage.getItem("tema") === "claro") {
        document.body.classList.add("modo-claro");
        botaoTema.innerText = "Modo Escuro";
    }

    botaoTema.addEventListener("click", function () {
        document.body.classList.toggle("modo-claro");

        // Atualiza o texto do botão e salva a escolha no localStorage
        if (document.body.classList.contains("modo-claro")) {
            botaoTema.innerText = "Modo Escuro";
            localStorage.setItem("tema", "claro");
        } else {
            botaoTema.innerText = "Modo Claro";
            localStorage.setItem("tema", "escuro");
        }
    });
});

// Buscar projetos do GitHub e exibir na página
document.addEventListener("DOMContentLoaded", function () {
    const usuario = "marcusvidal1";
    fetch(`https://api.github.com/users/${usuario}/repos`)
        .then(response => response.json())
        .then(repositorios => {
            const principal = document.querySelector(".container-principal");

            const tituloAPI = document.createElement("h2");
            tituloAPI.textContent = "Meus Projetos no GitHub";
            tituloAPI.style.textAlign = "center";
            tituloAPI.style.margin = "50px 0 30px 0";
            tituloAPI.style.fontFamily = "Montserrat";
            tituloAPI.style.color = "#22D4FD";
            principal.appendChild(tituloAPI);

            repositorios.forEach(repositorio => {
                const secaoProjeto = document.createElement("section");
                secaoProjeto.classList.add("cartao-projeto");

                const textoProjeto = document.createElement("div");
                textoProjeto.classList.add("texto-projeto");

                const nomeProjeto = document.createElement("h1");
                nomeProjeto.classList.add("titulo-projeto");
                nomeProjeto.textContent = repositorio.name;

                const descricaoProjeto = document.createElement("p");
                descricaoProjeto.classList.add("paragrafo-projeto");
                descricaoProjeto.textContent = repositorio.description || "Projeto sem descrição.";

                textoProjeto.appendChild(nomeProjeto);
                textoProjeto.appendChild(descricaoProjeto);

                secaoProjeto.appendChild(textoProjeto);
                principal.appendChild(secaoProjeto);
            });
        })
        .catch(error => {
            console.error("Erro ao buscar repositórios:", error);
        });
});

// Buscar projetos da API local
document.addEventListener("DOMContentLoaded", function () {
    fetch('http://localhost:3000/projetos')
        .then(res => res.json())
        .then(projetos => {
            console.log("Projetos recebidos:", projetos);

            const principal = document.querySelector(".container-principal");

            principal.innerHTML = `
                <section class="secao-introducao">
                    <h1 class="titulo-principal">Projetos</h1>
                    <p class="paragrafo-principal">Bem-vindo à minha página de projetos! 
                        Aqui, compartilho minhas criações, desde sites interativos até designs inovadores. 
                        Cada projeto reflete minha paixão por tecnologia e criatividade, 
                        buscando sempre entregar experiências envolventes e funcionais.</p>
                </section>
            `;

            projetos.forEach(projeto => {
                const divProjeto = document.createElement("section");
                divProjeto.classList.add("cartao-projeto");

                divProjeto.innerHTML = `
                    <div class="texto-projeto">
                        <h1 class="titulo-projeto">${projeto.titulo}</h1>
                        <p class="paragrafo-projeto">${projeto.descricao}</p>
                        <p><strong>Tecnologias:</strong> ${projeto.tecnologia.join(", ")}</p>
                    </div>
                    <img class="imagem-projeto" src="${projeto.imagem}" alt="Imagem do projeto ${projeto.titulo}">
                `;

                principal.appendChild(divProjeto);
            });
        })
        .catch(error => console.error("Erro ao buscar projetos:", error));
});
