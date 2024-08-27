document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var form = event.target;
    var nombre = form.querySelector('#name');
    var correo = form.querySelector('#email');
    var mensaje = form.querySelector('#message');

    var exp_regular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (nombre.value.trim() === '') {
        alert('Debes ingresar el nombre');
        return;
    }

    if (!exp_regular.test(correo.value.trim())) {
        alert('Debes cumplir con el formato del correo');
        return;
    }

    if (mensaje.value.trim() === '') {
        alert('Debes ingresar un mensaje');
        return;
    }

    alert('Mensaje enviado correctamente.');
});


document.getElementById('downloadBtn').addEventListener('click', function (event) {
    event.preventDefault(); 
    window.location.href = './assets/Curriculum José Rivera.pdf';
});

