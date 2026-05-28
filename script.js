// Função que calcula e exibe o impacto ecológico da tecnologia
function calcularImpacto() {
    // Seleciona os elementos necessários do HTML
    const seletor = document.getElementById('tecnologia');
    const resultadoDiv = document.getElementById('resultado');
    const tecnologiaSelecionada = seletor.value;
    
    let mensagem = "";

    // Analisa a opção selecionada e define a resposta sustentável
    if (tecnologiaSelecionada === "irrigacao") {
        mensagem = "💧 Economia de até 40% de água! Linhas de código bem programadas analisam a umidade do solo em tempo real, evitando o desperdício dos recursos hídricos.";
    } else if (tecnologiaSelecionada === "drones") {
        mensagem = "🌱 Redução de 30% no uso de defensivos! Algoritmos de visão computacional identificam pragas cirurgicamente, aplicando insumos apenas onde é necessário.";
    } else if (tecnologiaSelecionada === "dados") {
        mensagem = "📊 Otimização da Terra! Análise de dados climáticos previne a perda de safras inteiras e ajuda no manejo inteligente do solo, equilibrando produção e ecossistema.";
    } else {
        mensagem = "Por favor, selecione uma tecnologia válida.";
    }

    // Faz a caixinha verde aparecer e insere o texto explicativo
    resultadoDiv.style.display = "block";
    resultadoDiv.innerHTML = mensagem;
}
