if ( window.history.replaceState ) {
    window.history.replaceState( null, null, "/cadastro" );
}
const inputNome = document.querySelector("#nome");
const labelNome = document.querySelector("#labelNome")

const inputDescricao = document.querySelector("#descricao");
const labelDescricao = document.querySelector("#labelDescricao")

const inputTamanho = document.querySelector("#tamanho");
const labelTamanho = document.querySelector("#labelTamanho")

const inputImagem = document.querySelector("#imagem");
const labelImagem = document.querySelector("#labelImagem")

const buttonCadastrar = document.querySelector("#btnCadastro")

let campo1 = false;
let campo2 = false;
let campo3 = false;
let campo4 = false;

inputNome.addEventListener("blur",  ()=>{
    if(inputNome.value.length<3){
        labelNome.innerText = "Nome: (campo obrigatório)";
        labelNome.style.color = "red";
        campo1 = false;
        
    }else{
        labelNome.innerText = "Nome:"
        labelNome.style.color = "black";
        campo1 = true;
    }
    validarButton();
})

inputDescricao.addEventListener("blur",()=>{
    if(inputDescricao.value.length == 0){
        labelDescricao.innerText = "Descrição: (campo obrigatório)"
        labelDescricao.style.color = "red";
        campo2= false;
        
    }else{
        labelDescricao.innerText = "Descrição:"
        labelDescricao.style.color = "black";
        campo2 = true;
    }
    validarButton();
});
inputTamanho.addEventListener("click",  ()=>{
    if(inputTamanho.value==''){
        labelTamanho.innerText = "Tamanho: (campo obrigatório)";
        labelTamanho.style.color = "red";
        campo3 = false;
        
    }else{
        labelTamanho.innerText = "Tamanho:"
        labelTamanho.style.color = "black";
        campo3 = true;
    }
    validarButton();
})
inputImagem.addEventListener("blur",  ()=>{
    if(inputImagem.value.length == 0){
        labelImagem.innerText = "Imagem: (campo obrigatório)";
        labelImagem.style.color = "red";
        campo4 = false;
    }else{
        labelImagem.innerText = "Imagem:"
        labelImagem.style.color = "black";
        campo4 = true;
    }
    validarButton();
})

const validarButton = ()=>{

    if((campo1==false)||(campo2==false)||(campo3==false)||(campo4==false)){
        buttonCadastrar.setAttribute("disabled", "disabled")
        buttonCadastrar.classList.add("buttonDisable")
    }else{
        buttonCadastrar.removeAttribute("disabled", "disabled")
        buttonCadastrar.classList.remove("buttonDisable");
    }   
}

validarButton();

