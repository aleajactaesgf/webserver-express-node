const hbs = require('hbs');
// Helpers
hbs.registerHelper( 'getAnio', () => {
    return new Date().getFullYear();
});
hbs.registerHelper( 'capitalizar', (texto) => {
    
    let palabras = texto.split(' ');

    palabras.forEach( (palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.substr(1);    
    });
    return palabras.join(' ');
});