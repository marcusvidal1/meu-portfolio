document.addEventListener("DOMContentLoaded", function () {
    // Criar botão para alternar o tema
    const themeButton = document.createElement("button");
    themeButton.innerText = "Alternar Tema";
    themeButton.style.position = "fixed";
    themeButton.style.top = "10px";
    themeButton.style.right = "10px";
    themeButton.style.padding = "10px";
    themeButton.style.backgroundColor = "#22D4FD";
    themeButton.style.color = "#1B262C";
    themeButton.style.border = "none";
    themeButton.style.cursor = "pointer";
    themeButton.style.borderRadius = "5px";
    themeButton.style.fontSize = "16px";
    themeButton.style.fontWeight = "bold";

    document.body.appendChild(themeButton);

    // Alternar o tema
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
        document.querySelectorAll(".project-card").forEach(card => {
            card.classList.toggle("card-light");
        });
        document.querySelector(".main-title").classList.toggle("title-light");

        // Atualizar texto do botão
        if (document.body.classList.contains("light-mode")) {
            themeButton.innerText = "Modo Escuro";
            themeButton.style.backgroundColor = "#0057FF";
            themeButton.style.color = "white";
        } else {
            themeButton.innerText = "Modo Claro";
            themeButton.style.backgroundColor = "#22D4FD";
            themeButton.style.color = "#1B262C";
        }
    });

    // Estilos do modo claro
    const lightModeStyle = document.createElement("style");
    lightModeStyle.innerHTML = `
        .light-mode {
            background: linear-gradient(to bottom, #F6F6F6 20%, #D9D9D9 100%) !important;
            color: black;
        }
        .card-light {
            background-color: white !important;
            color: black;
            box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.2);
        }
        .title-light {
            color: #0057FF !important;
        }
    `;
    document.head.appendChild(lightModeStyle);
});






// Buscar projetos do GitHub e exibir na página
document.addEventListener("DOMContentLoaded", function () {
    const username = "marcusvidal1";
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(repos => {
            const main = document.querySelector(".main-container");

            const apiTitle = document.createElement("h2");
            apiTitle.textContent = "Meus Projetos no GitHub";
            apiTitle.style.textAlign = "center";
            apiTitle.style.margin = "50px 0 30px 0";
            apiTitle.style.fontFamily = "Montserrat";
            apiTitle.style.color = "#22D4FD";
            main.appendChild(apiTitle);

            repos.forEach(repo => {
                const projectSection = document.createElement("section");
                projectSection.classList.add("project-card");

                const projectText = document.createElement("div");
                projectText.classList.add("project-text");

                const projectName = document.createElement("h1");
                projectName.classList.add("project-title");
                projectName.textContent = repo.name;

                const projectDescription = document.createElement("p");
                projectDescription.classList.add("project-paragraph");
                projectDescription.textContent = repo.description || "Projeto sem descrição.";

                projectText.appendChild(projectName);
                projectText.appendChild(projectDescription);

                projectSection.appendChild(projectText);
                main.appendChild(projectSection);
            });
        })
        .catch(error => {
            console.error("Erro ao buscar repositórios:", error);
        });
});




document.addEventListener("DOMContentLoaded", function () {
    fetch('http://localhost:3000/projetos')
        .then(res => res.json())
        .then(projetos => {
            console.log("Projetos recebidos:", projetos);

            const main = document.querySelector(".main-container");

            
            main.innerHTML = `
                <section class="intro-section">
                    <h1 class="main-title">Projetos</h1>
                    <p class="main-paragraph">Bem-vindo à minha página de projetos! 
                        Aqui, compartilho minhas criações, desde sites interativos até designs inovadores. 
                        Cada projeto reflete minha paixão por tecnologia e criatividade, 
                        buscando sempre entregar experiências envolventes e funcionais.</p>
                </section>
            `;

            
            projetos.forEach(projeto => {
                const projetoDiv = document.createElement("section");
                projetoDiv.classList.add("project-card");

                projetoDiv.innerHTML = `
                    <div class="project-text">
                        <h1 class="project-title">${projeto.titulo}</h1>
                        <p class="project-paragraph">${projeto.descricao}</p>
                        <p><strong>Tecnologias:</strong> ${projeto.tecnologia.join(", ")}</p>
                    </div>
                    <img class="project-image" src="${projeto.imagem}" alt="Imagem do projeto ${projeto.titulo}">
                `;

                main.appendChild(projetoDiv);
            });
        })
        .catch(error => console.error("Erro ao buscar projetos:", error));
});