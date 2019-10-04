
const formulario = document.getElementById("container__form")
const botaoAdiciona = document.getElementById("button-tarefas")
const boxTarefas = document.getElementById("container-tarefas__lista")
const buttonRiscarTarefa = document.getElementById("button__riscar-tarefa")
const buttonExcluir = document.getElementById("button__excluir")
let digitarTarefas = document.getElementById("formulario-input")
let buttonSelecionados = document.getElementById("button__selecionados")
let dragging

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault()
    let guardarValorTaf = digitarTarefas.value.trim()

    if (guardarValorTaf === "") {
        digitarTarefas.setAttribute("placeholder", "Digite tarefa válida, senhora.")
        // digitarTarefas.classList.add("erro-vermelho")
    }

    else {

        // ============= CRIAR TAGS DO HTML ==============

        let listarTarefas = document.createElement("div")
        let mostrarTarefas = document.createElement("p")
        let cancel = document.createElement("span")
        digitarTarefas.setAttribute("placeholder", "Digite sua tarefa")
        let buttonEditar = document.createElement("span")

        // ============= COLOCAR TAGS CRIADAS DENTRO DO ELEMENTO PAI ==============

        boxTarefas.appendChild(listarTarefas)
        listarTarefas.appendChild(mostrarTarefas)
        listarTarefas.appendChild(buttonEditar)
        listarTarefas.appendChild(cancel)

        // =================== CRIAR ATRIBUTOS DAS TAGS CRIADAS =====================

        listarTarefas.setAttribute("class", "lista__tarefa")
        mostrarTarefas.setAttribute("class", "paragrafo")
        cancel.setAttribute("class", "botao_x")
        digitarTarefas.getAttribute("placeholder")
        buttonEditar.setAttribute("class", "botao_editar")

        // ================ COLOCAR O VALOR DO USUÁRIO DENTRO DA TAG ==================

        mostrarTarefas.textContent = guardarValorTaf

        // ==================== NOME DO BUTTON =====================

        cancel.textContent = "x"
        buttonEditar.textContent = "Editar"

        // let inputEditar = document.createElement("input")
        // buttonEditar.appendChild(inputEditar)
        // inputEditar.setAttribute("type", "text")
        //  inputEditar.setAttribute("class", "input_editar")
        //  mostrarTarefas.remove()
        // })

        // ======================== EDITAR ITEM ===============================

        listarTarefas.addEventListener("dblclick", function (evento) {
            listarTarefas.classList.remove("riscar_tarefa")
            listarTarefas.setAttribute("contentEditable", true)
        })

        // =================== BUTTON DE RISCAR CADA ITEM =====================

        mostrarTarefas.addEventListener("click", function (evento) {
            if (mostrarTarefas.classList.contains("riscar__tarefa")) {
                mostrarTarefas.classList.remove("riscar__tarefa")

            } else {
                mostrarTarefas.setAttribute("class", "riscar__tarefa")
            }
        })

        // ================= BUTTON DE REMOVER CADA ITEM ===================

        cancel.addEventListener("click", function (evento) {
            listarTarefas.remove()
        })

        // ============== BUTTON DE RISCAR TODOS OS ITENS ====================

        buttonRiscarTarefa.addEventListener("click", function (evento) {
            if (mostrarTarefas) {
                mostrarTarefas.classList.add("riscar__tarefa")
            }
        })

        // ============== BUTTON DE REMOVER TODOS OS ITENS =================

        buttonExcluir.addEventListener("click", function () {
            listarTarefas.remove()

        })

        // ========== BUTTON DE REMOVER SÓ OS ITENS SELECIONADOS ===========

        buttonSelecionados.addEventListener("click", function (evento) {
            if (mostrarTarefas.classList.contains("riscar__tarefa")) {
                listarTarefas.remove()
            }
        })

        // ======================== DRAG DROP ==============================

        mostrarTarefas.setAttribute("draggable", "true")
        boxTarefas.setAttribute("draggable", "true")
        listarTarefas.setAttribute("draggable", "true")

        boxTarefas.addEventListener("dragstart", function (ev) {
            dragging = ev.target.closest(".lista__tarefa")
        })

        boxTarefas.addEventListener("dragover", function (ev) {
            ev.preventDefault()
            const node = ev.target.closest(".lista__tarefa")
            this.insertBefore(dragging, node)
        })
        boxTarefas.addEventListener("dragend", function (ev) {
            dragging = null
        })

        formulario.reset()
    }

})
