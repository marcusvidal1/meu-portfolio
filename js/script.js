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
            // Atualizar perfil
            document.querySelector(".profile-name").textContent = data.nome;
            document.querySelector(".profile-description").textContent = data.descricao;

            // Atualizar a imagem de perfil
            const profileImage = document.querySelector(".profile-image");
            if (profileImage) {
                profileImage.src = data.imagem;
                profileImage.alt = `Foto de ${data.nome}`;
            }

            // Atualizar links e ícones das redes sociais
            document.querySelector(".instagram").href = data.redesSociais.instagram.url;
            document.querySelector(".instagram img").src = data.redesSociais.instagram.icone;

            document.querySelector(".github").href = data.redesSociais.github.url;
            document.querySelector(".github img").src = data.redesSociais.github.icone;

            document.querySelector(".linkedin").href = data.redesSociais.linkedin.url;
            document.querySelector(".linkedin img").src = data.redesSociais.linkedin.icone;

            document.querySelector(".twitter").href = data.redesSociais.twitter.url;
            document.querySelector(".twitter img").src = data.redesSociais.twitter.icone;

            // Atualizar Introdução
            document.querySelector(".intro-title").textContent = data.introducao.titulo;
            document.querySelector(".intro-subtitle").textContent = data.introducao.subtitulo;
            document.querySelector(".about-me").innerHTML = data.introducao.sobreMim;
            document.querySelector(".curriculo").href = data.introducao.links.curriculo;
            document.querySelector(".projetos").href = data.introducao.links.projetos;
        })
        .catch(e => console.log("Erro ao buscar perfil:", e));
});