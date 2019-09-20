
$(document).ready(function(){
  $('#btn_accountcreate').click(function(){

    var _nombre = $('#form_nombre').val();
    var _apellido = $('#form_apellido').val();
    var _email = $('#form_email').val();
    var _username = $('#form_username').val();
    var _password = $('#form_password').val();
    var _confirm = $('#form_confirm').val();
    var _tel = $('#form_telefono').val();
    var _direccion = $('#form_direccion').val();
    var _avatar = $('#form_avatar').val();

    var usuario = {
      nombre : _nombre,
      apellido : _apellido,
      email : _email,
      username : _username,
      password : _password,
      confirm : _confirm,
      tel : _tel,
      direccion : _direccion
    };

    var usuario_json = JSON.stringify(usuario);

    localStorage.setItem("usuario", usuario_json);

  })
})
