function verificarRespuesta(respuesta) {
    if (respuesta === 'opcion1') {
        alert('Te has equivocado. El sí está a la derecha.');
    } else if (respuesta === 'opcion2') {
        alert('¡Gracias por perdonarme!');
        // Puedes agregar aquí más lógica si es necesario
        document.getElementById('notification').style.display = 'none'; // Oculta la notificación
    }
}
