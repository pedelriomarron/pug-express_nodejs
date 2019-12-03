const getYear = () => {
    return new Date().getFullYear()
}

const capitalizar = (texto) => {
    let palabras = texto.split(' ')
    palabras.forEach((palabra, i) => {
        palabras[i] = `${palabra.charAt(0).toUpperCase()}${palabra.slice(1).toLowerCase()}`;
    })
    return palabras.join(' ')
}


module.exports = {
    getYear, capitalizar
}

