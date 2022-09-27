/// TRAIGO LOS VALORES QUE LLEVE AL LOCAL
const usuarioPagina = localStorage.getItem("datos")
console.log(JSON.parse(usuarioPagina))
/// EL NUEVO ARRAY QUE TRAGIO CON LOS DATOS QUE SE GUARDARON
const usuarioCorrecto = JSON.parse(localStorage.getItem("usuario"))
console.log(usuarioCorrecto)