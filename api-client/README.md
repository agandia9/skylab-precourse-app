END POINTS API-CLIENT
    
    // LOGIN: necesitaremos el username y el password para devolver el token del usuario

    login(username,password)

    // LIST USERS: devolvera todos los usuarios de la BBDD

    listUsers()

    // LIST USER: devolvera un usuario en concreto de la base de datos, deveremos pasarle el token

    listUser(token)

    // CREATE USER: creara un usuario nuevo en la BBDD

    createUser(name,surname,username,password,stateallprecourse,photo,slackUser,units)

    // UPDATE USER: modificara un usuario en concreto de la BBDD

    updateUser(id,name,surname,username,password,stateallprecourse,photo,slackUser,units)

    // DELETE USER: eliminara un usuario en concreto de la BBDD
    
    deleteUser(id)

    // LIST SUBJECTS: retorna todas las unidades del precurso de skylab

    listSubjects()

    // LIST SUBJECT: retorna una unidad pasando su numero de unidad por parametro
    
    listSubject(unit)

    // CREATE SUBJECT: crea una nueva unidad pasando por parametro unit,theory,resource y unitPercentage

    createSubject(unit,theory,resource,unitPercentage)

    // UPDATE SUBJECT: modifica una unidad pasando por parametro la id de la unidad y los campos a modificar

    updateSubject(id,unit,theory,resource,unitPercentage)

    // DELETE SUBJECT: elimina una unidad pasando una id de la unidad a eliminar

    deleteSubject(id)