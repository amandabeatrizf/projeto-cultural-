const nomes = ["Fernanda", "juliana", "Maria Eduarda", "Marcio", "Amanda", "Gustavo", "Gabriel", "jonas"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)