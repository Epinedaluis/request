const express = require('express') //importando el módulo express
const app = express()

app.use(express.json());

// http://localhost:3000/login?user=eduuardo&password=123

app.get('/login', (req, res) => {
    const {user,password}=req.query
    if (!user || !password){
        res.status(400).json({msg: 'You need to provide <user> and <password> parameters'})
        return
    }
    if (user == 'eduardo' && password == '123'){
        res.json({msg: 'Iniciaste sesión con éxito'})
        return
    }
    res.status(400).json("Error en el usuario o contraseña")
})

//http://localhost:3000/
app.get('/:nombre', (req, res) => {
    const params = req.params
    res.json({params})
})

// hhtp://localhost:3000/


/* Los navegadores sólo usan el método GET, por lo tanto los demás no se verán */
app.post('/login', (req, res) => { //end point
    const {user,password} = req.body
  
    if (!user || !password){
        res.status(400).json({msg: 'You need to provide <user> and <password> parameters'})
        return
    }
    if (user == 'eduardo' && password == '123'){
        res.json({msg: 'Iniciaste sesión con éxito'})
        return
    }
    res.status(404).json({
        msg: 'Error en el usuario o contraseña'
    })
})

app.patch('/', (req, res) => { //Endpoint
    res.json("Hola con PATCH")
})

app.delete('/', (req, res) => {
    res.json("Hola con DELETE")
})


app.listen(3000, () => {console.log('listening on port 3000')})