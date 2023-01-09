const data = new Date();

export function formatarData(data) {
    let dia = data.substring(8,10);
    let mes = data.substring(5,7);
    let ano = data.substring(0,4);
    return `${dia}/${mes}/${ano}`;
}

export function obterMesAtual() {
    let mes = data.getMonth()+1;
    return mes;
}