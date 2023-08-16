export function problem (lines){
    //Entrada de itens
    const pedido = lines[0].split(' ')
    
    //Lista de itens
    const itens = [ 
        {
            'descricao': 'cachorro quente',
            'codigo': 1,
            'preco': 4.00
        },
        {
            'descricao': 'X-salada',
            'codigo': 2,
            'preco': 4.50  
        },
        {
            'descricao': 'X-bacon',
            'codigo': 3,
            'preco': 5.00
        },
        {
            'descricao': 'torrada simples',
            'codigo': 4,
            'preco': 2.00
        },
        {
            'descricao': 'refrigerante',
            'codigo': 5,
            'preco': 1.50
        }
    ]
    
    //Verificando tamanho da lista
    const QuantidadeDeItensAgora = itens.length
    
    //Função para adicionar itens
    const adicionaItem =(descricao,preco,qtdDeItensAtual)=>{
        const item = {
            'descricao': descricao,
            'preco': preco,
            'codigo': qtdDeItensAtual+1
        }
        itens.push(item)
    }
    //Função para atualizar itens
    const atualizaItem = (codigo,descricao,preco)=>{
        itens[codigo-1].descricao = descricao
        itens[codigo-1].preco = preco
    }
    //Função para remover itens
    const removeItem = (codigo)=>itens.splice(itens.indexOf(codigo-1),1)

    //Adicionando item
    adicionaItem('pastel de carne',6.00,QuantidadeDeItensAgora)
    console.log(itens[5])
    
    //Atualizando item
    atualizaItem(6,'pastel de frango',7.00)
    console.log(itens[5])
    
    //Removendo item
    removeItem(6)
    console.log(itens[5])

    //Calculando valor total do pedido
    const calcula = (codigo,qtd)=>{
        return (itens[codigo-1].preco)*qtd
    }   
    console.log(`Total: R$ ${calcula(pedido[0],pedido[1]).toFixed(2)}`)
}