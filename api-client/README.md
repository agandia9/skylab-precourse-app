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