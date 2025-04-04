
        let numeroAleatorio = Math.round(Math.random() * 100);
        let tentativas = 0;

        function verificarNumero() {
            let entrada = document.getElementById("entrada").value;
            let mensagem = document.getElementById("mensagem");
            tentativas++;

            if (entrada == numeroAleatorio) {
                mensagem.textContent = `Parabéns! Você acertou em ${tentativas} tentativas.`;
                document.getElementById("reiniciar").style.display = "block";
            } else if (entrada < numeroAleatorio) {
                mensagem.textContent = "Tente um número maior.";
            } else {
                mensagem.textContent = "Tente um número menor.";
            }
        }

        function reiniciarJogo() {
            numeroAleatorio = Math.round(Math.random() * 100);
            tentativas = 0;
            document.getElementById("mensagem").textContent = "";
            document.getElementById("entrada").value = "";
            document.getElementById("reiniciar").style.display = "block";
        }
