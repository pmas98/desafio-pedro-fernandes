class Lanche {
    constructor(codigo, quantidade){
        this.codigo = codigo;
        this.quantidade = quantidade;
    }

    getCodigo(){
        return this.codigo;
    }
    getQuantidade(){
        return this.quantidade;
    }
}

export { Lanche };
