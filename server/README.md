# END POINTS

### Login del usuario, te devolvera un token para ver cierta información del usuario

```
router.post('/login', jsonBodyParser, login)
```

### Lista la información de un usuario en concreto, necesitara un token para poder visualizarla

```
router.get('/listUser/:id', listUser)
```

### Lista todos los usuarios del sistema

```
router.get('/listUsers', listUsers)
```

### Crea un usuario y lo  añade dentro de la lista de usuarios 

```
router.post('/createUser', jsonBodyParser, createUser)
```

### actualiza la información basica de un usuario en concreto necesita un token para poder actualizar su información

```
router.put('/updateUser/:id', jsonBodyParser, updateUser)
```

### elimina un usuario de la lista de usuarios, necesita un token para poder eliminarlo

```
router.delete('/deleteUser/:id', deleteUser)
```

### listar todas las materias del curso
```
router.get('/listSubjects', listSubjects)
```

### lista una materia del curso filtrada por unidad
```
router.get('/listSubject/:unit', listSubject)
```

### crea la materia que luego se asignara al usuario
```
router.post('/createSubject', jsonBodyParser, createSubject)
```

### actualiza la materia con la id correspondiente
```
router.put('/updateSubject/:id', jsonBodyParser, updateSubject)
```

### elimina la materia con la id correspondiente
```
router.delete('/deleteSubject/:id', jsonBodyParser, deleteSubject)
```

### lista todos los ejercicios del curso
```
router.get('/listExercises', listExercises)
```

### lista un ejercicio en concreto del curso
```
router.get('/listExercise/:id', listExercise)
```

### crea un ejercicio y lo añade dentro de la materia correspondiente
```
router.post('/createExercise', jsonBodyParser, createExercise)
```

### actualiza un ejercicio en concreto
```
router.put('/updateExercise/:id', jsonBodyParser, updateExercise)
```

### elimina un ejercicio en concreto
```
router.delete('/deleteExercise/:id', deleteExercise)
```

### lista todos los ejercicio de una unidad en concreto
```
router.get('/listExercisesUnit/:unit', listExercisesUnit)
```

### actualiza el estado de un ejercicio en concreto
```
router.put('/changeStatus', [jwtValidator,jsonBodyParser], changeStatus)
```

### actualiza el porcentage realizado de una materia en concreto
```
router.put('/changePorcentage', [jwtValidator,jsonBodyParser], changePorcentage)
```

### actualiza el porcentage total del usuario
```
router.put('/changeTotalPorcentage', jwtValidator, changeTotalPorcentage)
```

### grapea los 3 ultimos end points realizados
```
router.put('/changeTotalStatus', [jwtValidator,jsonBodyParser], changeTotalStatus)
```

