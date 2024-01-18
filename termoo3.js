let palavraSecreta = "morango";
let tentativasRestantes = 5;
let letrasCorretas = [];
let letrasIncorretas = [];

function exibirEstado() {
    document.querySelector('.palavra').textContent = palavraSecreta.split('').map(letra => letrasCorretas.includes(letra) ? letra : '_').join(' ');
    document.querySelector('.tentativas').textContent = `Tentativas Restantes: ${tentativasRestantes}`;
    document.querySelector('.incorretas').textContent = `Letras Incorretas: ${letrasIncorretas.join(', ')}`;
}

function fazerPalpite() {
    let palpite = document.getElementById('palpite').value.toLowerCase();

    if (palpite.length === 1 && palpite.match(/[a-zç]/)) {
        if (palavraSecreta.includes(palpite)) {
            letrasCorretas.push(palpite);
        } else {
            letrasIncorretas.push(palpite);
            tentativasRestantes--;
        }
    } else if (palpite.length === palavraSecreta.length && palpite.match(/[a-zç]/)) {
        if (palpite === palavraSecreta) {
            letrasCorretas = palavraSecreta.split('');
        } else {
            tentativasRestantes--;
        }
    } else {
        alert("Entrada inválida. Por favor, digite apenas uma letra ou a palavra completa.");
    }

    if (letrasCorretas.length === new Set(palavraSecreta.split('')).size) {
        exibirEstado();
        alert("Parabéns! Você acertou!");
    }

    if (tentativasRestantes === 0) {
        exibirEstado();
        alert(`Você perdeu! A palavra secreta era: ${palavraSecreta}`);
    }

    exibirEstado();
    document.getElementById('palpite').value = "";
}