const formulario = document.querySelector('form')
const listaR = document.querySelector('pre')

const listaCompras = []

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const nomeItem = formulario.nomeitem.value

    const unidades = formulario.unidades.value

    
    
    listaCompras.push({
        nomeItem,
        unidades
    })
    
    let lista = ''
    listaCompras.forEach((item, i) => lista += ` ${i + 1}. ${item.nomeItem} - ${item.unidades} unidade(s) \n`)
    listaR.innerText = lista

    formulario.reset()
    formulario.nomeitem.focus()
})

formulario.btnRemover.addEventListener('click', () => {
    listaCompras.shift()

    let lista = ''
    listaCompras.forEach((item, i) => lista += ` ${i + 1}. ${item.nomeItem} - ${item.unidades} unidade(s) \n`)
    listaR.innerText = lista
})