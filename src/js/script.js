function montarListaProdutos (listaProdutos){
    const ul = document.querySelector('.containerListaProdutos ul');
    ul.innerHTML='' 
    listaProdutos.forEach((produtos) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = produtos.img;
        img.alt = produtos.nome;

        const h3 = document.createElement('h3');
        h3.innerText = produtos.nome;

        const span = document.createElement('span'); 
        span.innerText = produtos.secao; 

        const p = document.createElement('p');
        p.innerText = `R$${produtos.preco},00`;

        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(span);
        li.appendChild(p);

        ul.appendChild(li);
    });

    let soma=0;
    for(count=0; count<listaProdutos.length; count++){
        soma+=listaProdutos[count].preco;
    }
    const precoTotalProdutos=document.getElementById('precoTotal');
    precoTotalProdutos.innerText=soma;

}
montarListaProdutos(produtos);



function filtrar(event){
    const filtroProduto=[];
    const produto= event.target.dataset.secao;
    const arrayProduto=document.getElementsByClassName('estiloGeralBotoes')
    
    
    if(produto==='Todos'){
        montarListaProdutos(produtos)
    } else{
        for(let i=0;i<produtos.length;i++){
            if(produtos[i].secao===produto){
                filtroProduto.push(produtos[i])
            }
        }
        montarListaProdutos(filtroProduto);
    }

    for(let i=0; i<arrayProduto.length; i++){
        arrayProduto[i].classList.remove('select');
    }
    event.target.classList.add('select');
}

const filtroSecao = document.getElementsByClassName('estiloGeralBotoes');
for(let element of filtroSecao){
    element.addEventListener('click',filtrar)
}



const botaoBuscarProduto= document.getElementById('botaoBusca');
botaoBuscarProduto.addEventListener('click', buscar);

let input = document.getElementById('campoBuscaPorNome');
input.addEventListener('keydown',(event)=>{
    if(event.key==='Enter') buscar();
})

function buscar(){
    let input = document.getElementById('campoBuscaPorNome');
    let produtoBusca= [];

    for(let count=0; count<produtos.length;count++){
        if(produtos[count].nome.toLowerCase().includes(input.value.toLowerCase())){
            produtoBusca.push(produtos[count]);
        }
    }
    montarListaProdutos(produtoBusca)
}


/* const botaoHortifruti= document.getElementById('botaoHortifruti');
botaoHortifruti.addEventListener('click', mostrarHortifruti);
 */
/* function mostrarHortifruti(){
    let produtosHortifruti= [];
    
    for(let count=0; count<produtos.length;count++){
        if(produtos[count].secao=='Hortifruti') {
            produtosHortifruti.push(produtos[count]);
        }
    }
    montarListaProdutos(produtosHortifruti);
}

const botaoHortifruti= document.getElementById('botaoHortifruti');
botaoHortifruti.addEventListener('click', mostrarHortifruti);

function mostrarHortifruti(){
    let produtosHortifruti= [];
    
    for(let count=0; count<produtos.length;count++){
        if(produtos[count].secao=='Hortifruti') {
            produtosHortifruti.push(produtos[count]);
        }
    }
    montarListaProdutos(produtosHortifruti);
} */

/* const botaoTodos= document.getElementById('botaoTodos');
botaoTodos.addEventListener('click', ()=> montarListaProdutos(produtos));
 */






