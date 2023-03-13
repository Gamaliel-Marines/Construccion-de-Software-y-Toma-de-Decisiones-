const lost_founds = [
    {
        descripcion: "botella de agua",
        lugar: "centro de congresos",
        fecha: "01/01/12",
        matricula: "A01700000",
        nombre: "Jorge",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
    },
    {
        descripcion: "botella de agua",
        lugar: "centro de congresos",
        fecha: "01/01/12",
        matricula: "A01700000",
        nombre: "Jorge",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
    },
    {
        descripcion: "botella de agua",
        lugar: "centro de congresos",
        fecha: "01/01/12",
        matricula: "A01700000",
        nombre: "Jorge",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
    },
    {
        descripcion: "botella de agua",
        lugar: "centro de congresos",
        fecha: "01/01/12",
        matricula: "A01700000",
        nombre: "Jorge",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
    },
    {
        descripcion: "botella de agua",
        lugar: "centro de congresos",
        fecha: "01/01/12",
        matricula: "A01700000",
        nombre: "Jorge",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
    },
    {
        descripcion: "botella de agua",
        lugar: "centro de congresos",
        fecha: "01/01/12",
        matricula: "A01700000",
        nombre: "Jorge",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
    },
    {
        descripcion: "botella de agua",
        lugar: "centro de congresos",
        fecha: "01/01/12",
        matricula: "A01700000",
        nombre: "Jorge",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
    },
    {
        descripcion: "botella de agua",
        lugar: "centro de congresos",
        fecha: "01/01/12",
        matricula: "A01700000",
        nombre: "Jorge",
        imagen: "https://bulma.io/images/placeholders/1280x960.png",
    },
];

module.exports = class LOSTFOUND {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(my_lostfound) {
        
        this.descripcion = my_lostfound.descripcion || "botella de agua";
        this.lugar = my_lostfound.lugar || "centro de congresos";
        this.fecha = my_lostfound.fecha || "01/01/12";
        this.matricula = my_lostfound.matricula || "A01700000";
        this.nombre = my_lostfound.nombre || "Jorge";
        this.imagen = my_lostfound.imagen || "https://bulma.io/images/placeholders/1280x960.png";
    
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        lost_founds.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return lost_founds;
    }

}
