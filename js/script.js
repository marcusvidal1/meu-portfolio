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

// Carregar dados da API e atualizar o perfil
document.addEventListener("DOMContentLoaded", function () {
    fetch('http://localhost:3000/perfil')
        .then(res => res.json())
        .then(data => {
            document.querySelector(".nome-perfil").textContent = data.nome;
            document.querySelector(".descricao-perfil").textContent = data.descricao;

            const imagemPerfil = document.querySelector(".imagem-perfil");
            if (imagemPerfil) {
                imagemPerfil.src = data.imagem;
                imagemPerfil.alt = `Foto de ${data.nome}`;
            }

            // Atualizar links e ícones das redes sociais
            const redes = ["instagram", "github", "linkedin", "twitter"];
            redes.forEach(rede => {
                const link = document.querySelector(`.${rede}`);
                const icone = document.querySelector(`.${rede} img`);
                if (link && icone) {
                    link.href = data.redesSociais[rede].url;
                    icone.src = data.redesSociais[rede].icone;
                }
            });

            // Atualizar introdução
            document.querySelector(".titulo-introducao").textContent = data.introducao.titulo;
            document.querySelector(".subtitulo-introducao").textContent = data.introducao.subtitulo;
            document.querySelector(".sobre-mim").innerHTML = data.introducao.sobreMim;
            document.querySelector(".curriculo").href = data.introducao.links.curriculo;
            document.querySelector(".projetos").href = data.introducao.links.projetos;
        })
        .catch(e => console.log("Erro ao buscar perfil:", e));
});