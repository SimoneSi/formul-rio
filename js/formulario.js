const camposInput = document.querySelectorAll('.campo')
const camposObrigatorios = document.querySelectorAll('.campo-obrigatorio')
const enviarFormulario = document.getElementById('botao-envio');

enviarFormulario.addEventListener('click', () => percorrerInputs())

function percorrerInputs() {
    camposInput.forEach((item, index) => {
        if (item.value.trim() === '') {
            item.classList.add('borda-vermelha')
            camposObrigatorios[index].classList.add('mostrar')
            return
        }

        item.classList.remove('borda-vermelha')
        camposObrigatorios[index].classList.remove('mostrar')
        item.classList.add('borda-verde')

    })
}


camposInput.forEach((item, index) => {
    item.addEventListener('change', () => {
        if (item.value.trim() === '') {
            item.classList.add('borda-vermelha')
            item[index].classList.add('mostrar')

            item.classList.remove('borda-verde')
            return
        }

        item.classList.remove('borda-vermelha')
        item[index].classList.remove('mostrar')

        item.classList.add('borda-verde')

    })
})




