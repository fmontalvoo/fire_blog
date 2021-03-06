$(() => {

    const auth = new Autenticacion();

    $("#btnRegistroEmail").click(() => {
        const nombres = $('#nombreContactoReg').val();
        const email = $('#emailContactoReg').val();
        const password = $('#passwordReg').val();

        auth.crearCuentaEmailPass(email, password, nombres);
    });

    $("#btnInicioEmail").click(() => {
        const email = $('#emailSesion').val();
        const password = $('#passwordSesion').val();

        auth.authEmailPass(email, password)
    });

    //$("#authFB").click(() => );

    //$("#authTwitter").click(() => );

    $("#authGoogle").click(() => auth.authCuentaGoogle());

    $('#btnRegistrarse').click(() => {
        $('#modalSesion').modal('close');
        $('#modalRegistro').modal('open');
    });

    $('#btnIniciarSesion').click(() => {
        $('#modalRegistro').modal('close');
        $('#modalSesion').modal('open');
    });

});