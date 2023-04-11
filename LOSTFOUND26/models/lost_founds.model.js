const db = require('../util/database');

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
     
    save() {
        
        //consulta parametrizada
        return db.execute(`INSERT INTO objetos (descripcion, lugar, fecha, imagen) VALUES (?,?,?,?)`,
        [this.descripcion, this.lugar, this.fecha, this.imagen]
    );
    }

    static fetch(id)
    {
        let query = `SELECT * FROM objetos`;
        if(id != 0)
        {
            query += ` WHERE id = ?`
            return db.execute(query, [id]);
        }   
        return db.execute(query);  
    }

    static find(valor_busqueda)
    {
        return db.execute(`
        SELECT *
        FROM objetos
        WHERE descripcion LIKE ? OR fecha LIKE ? OR lugar LIKE ?
        `, ['%' + valor_busqueda + '%', '%' + valor_busqueda + '%', '%' + valor_busqueda + '%']);
    }
    
}
