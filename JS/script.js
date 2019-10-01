 
// 1 pegar o id do input
const formulario = document.getElementById("container__form")
const botaoAdiciona = document.getElementById("button-tarefas")
const boxTarefas = document.getElementById("container-tarefas__lista")
// const tarefas = document.getElementById("container-tarefas__lista")

formulario.addEventListener("submit", function(evento){
    evento.preventDefault()
    let digitarTarefas = document.getElementById("formulario-input")
    let guardarValorTaf = digitarTarefas.value.trim()

        if (guardarValorTaf === ""){
            digitarTarefas.setAttribute("placeholder", "Digite tarefa válida, senhora.")
            
        }else  { 


        let listarTarefas = document.createElement("div")
        listarTarefas.setAttribute("class", "lista__tarefa")
        boxTarefas.appendChild(listarTarefas)
        let mostrarTarefas = document.createElement("p")
        listarTarefas.appendChild(mostrarTarefas)
        let cancel = document.createElement("button")
        cancel.setAttribute ("class", "botao_x")
        cancel.textContent = "x"
        listarTarefas.appendChild(cancel)

        mostrarTarefas.textContent = guardarValorTaf
        digitarTarefas.getAttribute("placeholder")

        
    }
   
    formulario.reset ()
    mostrarTarefas.addEventListener("click", function(evento){
    if(mostrarTarefas.classList.contains("riscar__tarefa")){
        mostrarTarefas.classList.remove("riscar__tarefa")

    } else{
        mostrarTarefas.setAttribute("class","riscar__tarefa")

    }
    
    
    
    
    
    })

})


// 2 classe do botão ADD
// 3 container onde vai ficar as tarefas
// 4 colocar uma ação que manda o valor que o usuário digitou para o botão ADD

// 5 com a ação do botão ADD vai direcionar para as terefas
