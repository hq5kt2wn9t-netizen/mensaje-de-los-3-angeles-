function abrirImagen(src) {
    const modal = document.getElementById('modal');
    const imagenAmpliada = document.getElementById('imagen-ampliada');
    imagenAmpliada.src = src;
    modal.style.display = 'block';
}

function cerrarImagen() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';


};