END POINTS

// Login del usuario, te devolvera un token para ver cierta información del usuario

router.post('/login', jsonBodyParser, login)

// Lista la información de un usuario en concreto, necesitara un token para poder visualizarla

router.get('/listUser/:id', listUser)

// Lista todos los usuarios del sistema

router.get('/listUsers', listUsers)

// Crea un usuario y lo  añade dentro de la lista de usuarios 

router.post('/createUser', jsonBodyParser, createUser)

// actualiza la información basica de un usuario en concreto necesita un token para poder actualizar su información

router.put('/updateUser/:id', jsonBodyParser, updateUser)

// elimina un usuario de la lista de usuarios, necesita un token para poder eliminarlo

router.delete('/deleteUser/:id', deleteUser)