document.addEventListener("DOMContentLoaded", function () {
    //botão para alternar o tema
    const botaoTema = document.createElement("button");
    botaoTema.innerText = "Alternar Tema";
    botaoTema.style.position = "fixed";
    botaoTema.style.top = "10px";
    botaoTema.style.right = "10px";
    botaoTema.style.padding = "10px";
    botaoTema.style.backgroundColor = "#22D4FD";
    botaoTema.style.color = "#1B262C";
    botaoTema.style.border = "none";
    botaoTema.style.cursor = "pointer";
    botaoTema.style.borderRadius = "5px";
    botaoTema.style.fontSize = "16px";
    botaoTema.style.fontWeight = "bold";

    document.body.appendChild(botaoTema);

    //alternar o tema
    botaoTema.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
        document.querySelector(".profile-card").classList.toggle("card-light");
        document.querySelector(".intro-title").classList.toggle("title-light");

        //texto do botão
        if (document.body.classList.contains("light-mode")) {
            botaoTema.innerText = "Modo Escuro";
            botaoTema.style.backgroundColor = "#0057FF";
            botaoTema.style.color = "white";
        } else {
            botaoTema.innerText = "Modo Claro";
            botaoTema.style.backgroundColor = "#22D4FD";
            botaoTema.style.color = "#1B262C";
        }
    });

    //estilos do modo claro
    const estiloTemaClaro = document.createElement("style");
    estiloTemaClaro.innerHTML = `
        .light-mode {
            background: linear-gradient(to right, #F6F6F6 40%, #D9D9D9 40%) !important;
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
    document.head.appendChild(estiloTemaClaro);
});







document.addEventListener("DOMContentLoaded", function(){
    fetch('http://localhost:3000/perfil')
        .then(res => res.json())
        .then(data => {
            document.querySelector(".profile-name").textContent = data.nome;
            document.querySelector(".profile-description").textContent = data.descricao;

            // Corrigir carregamento da imagem
            const profileImage = document.querySelector(".profile-image");
            if (profileImage) {
                profileImage.src = data.imagem;
                profileImage.alt = `Foto de ${data.nome}`;
                console.log("Imagem carregada:", data.imagem);
            }
        })
        .catch(e => console.log("Erro ao buscar perfil:", e));
});