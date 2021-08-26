export default class InterfaceUsuario{
    
    url = 'http://localhost:4000/usuarios/'

    constructor(nombre, apellido, correo){
        this.nombre = nombre,
        this.apellido = apellido,
        this.correo = correo
    }
    divMostrarPerfil(perfil) {
        axios.get(perfil.url)
        const {nombre, apellido, correo} = perfil;
        let mostrarPerfil = document.getElementById('mostrar-perfil');
        mostrarPerfil.innerHTML = ''
        mostrarPerfil.innerHTML += `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${correo}</td> `

    }

    


    
}