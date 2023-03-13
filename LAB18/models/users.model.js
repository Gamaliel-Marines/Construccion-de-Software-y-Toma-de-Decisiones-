const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class User {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_usuario) {
        this.nombre = mi_usuario.nombre || "John Doe";
        this.username = mi_usuario.username || "johndoe";
        this.password = mi_usuario.password || "johndoe123";
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        //hot_cakes.push(this);
        //consulta parametrizada
        return bcrypt.hash(this.password, 12).then((password_cifrado) => {
            return db.execute(`
            INSERT INTO usuarios (nombre, username, password) VALUES (?, ?, ?)
            `,
            [this.nombre, this.username, password_cifrado]);

        } ).catch((error) => {console.log(error)});
        
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    
    static fetch(id)
    {
        let query = `SELECT * FROM usuarios`;
        if(id != 0)
        {
            query += ` WHERE id = ?`
            return db.execute(query, [id]);
        }  
            
        return db.execute(query);
        
    }
    
    static fetchAll()
    {
        return db.execute(
            `SELECT *
            FROM usuarios` 
            );  
    }

    static fetchOne(id)
    {
        return db.execute(
            `SELECT *
            FROM usuarios
            WHERE id = ?`, [id] 
            );  
    }
}
