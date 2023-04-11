module.exports = (request, response, next) => {
    if (!(request.session.privilegios.indexOf('registrar_objeto') >= 0)) {
        return response.redirect('/lost_founds/lista');
    }
    next();
}