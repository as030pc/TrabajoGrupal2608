export default class Usuario{

    url = 'http://localhost:4000/usuarios/';

    constructor(nombre, apellido, correo){
        this.nombre = nombre,
        this.apellido = apellido,
        this.correo = correo
    }


    crearPerfil(perfil){
        axios.post(this.url,perfil)
        .then(data => console.log(data))
        .catch(console.warn)
    }

    buscarPerfil(email){
        return axios.get(this.url)
       .then(({data}) => {
           //console.log(data.find(user => user.correo === email))
           localStorage.setItem('Buscado',JSON.stringify(data.find(user => user.correo === email)))
       })
    //    .catch(console.warn)
    }

    editarPerfil(perfil,id){
        axios.put(this.url+id,perfil)
        .then(data => console.log(data))
        .catch(console.warn)
    }

    eliminarPerfil(id){
        // axios.put(this.url+id)
        axios.delete(this.url+id)  //Se logro identificar que la peticion de axios que se requiere es delete, que permite eliminar el ID
        .then(data => console.log(data))
        .catch(console.warn)
    }
  
    
}