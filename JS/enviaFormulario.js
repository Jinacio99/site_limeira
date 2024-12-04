function validarFormulario(event) {
    let valido = true;
    let mensagens = [];

    // Validar nome (mínimo 6 caracteres e deve conter pelo menos duas palavras)
    const nome = document.getElementById("nome").value.trim();
    if (nome.length < 6 || nome.split(" ").length < 2) {
        valido = false;
        mensagens.push("O nome deve ter pelo menos 6 caracteres e conter pelo menos duas palavras.");
    }

    // Validar campo de sexo
    const masculino = document.getElementById("masculino").checked;
    const feminino = document.getElementById("feminino").checked;
    const outro = document.getElementById("outro").checked;
    if (!masculino && !feminino && !outro) {
        valido = false;
        mensagens.push("Selecione o campo sexo.");
    }

    // Validar estado
    const estado = document.querySelector("select[name='estado']").value;
    if (!estado) {
        valido = false;
        mensagens.push("Selecione o campo estado.");
    }

    // Validar idade (apenas números inteiros e maior que 0)
    const idade = document.getElementById("idade").value.trim();
    if (!idade || isNaN(idade) || idade <= 0) {
        valido = false;
        mensagens.push("Informe uma idade válida (número maior que 0).");
    }

    // Validar sugestão (mínimo 100 caracteres)
    const sugestao = document.getElementById("sugestao").value.trim();
    if (sugestao.length < 100) {
        valido = false;
        mensagens.push("A sugestão deve ter pelo menos 100 caracteres.");
    }

    // Exibir mensagens de erro e impedir envio se inválido
    if (!valido) {
        event.preventDefault(); // Impede o envio do formulário
        alert(mensagens.join("\n"));
    }
}

// Associar validação ao evento de submissão do formulário
document.getElementById("formularioSugestoes").addEventListener("submit", validarFormulario);
