class Autenticacion {
  authEmailPass(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        if (response.user.emailVerified) {
          $('#avatar').attr('src', 'imagenes/usuario_auth.png');
          Materialize.toast(`Bienvenido ${result.user.displayName}`, 5000);
        } else {
          firebase.auth().signOut();
          Materialize.toast(`Por favor verifica tu direccion de correo`, 5000);
        }
      });
    $('.modal').modal('close');
  }

  crearCuentaEmailPass(email, password, nombres) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        response.user.updateProfile({
          displayName: nombres
        });

        const config = {
          url: 'http://localhost:5500/public/index.html'
        };

        response.user.sendEmailVerification(config)
          .catch(error => {
            console.error('Error: ', error);
            Materialize.toast(error.message, 2500);
          });

        firebase.auth().signOut();

        Materialize.toast(
          `Bienvenido ${nombres}, debes realizar el proceso de verificación`,
          4000
        );
        $('.modal').modal('close');

      })
      .catch(error => {
        console.error('Error: ', error);
        Materialize.toast(error.message, 2500);
      });

  }

  authCuentaGoogle() {
    //$('#avatar').attr('src', result.user.photoURL)
    //$('.modal').modal('close')
    //Materialize.toast(`Bienvenido ${result.user.displayName} !! `, 4000)
  }

  authCuentaFacebook() {
    //$('#avatar').attr('src', result.user.photoURL)
    //$('.modal').modal('close')
    //Materialize.toast(`Bienvenido ${result.user.displayName} !! `, 4000)
  }

  authTwitter() {
    // TODO: Crear auth con twitter
  }
}
