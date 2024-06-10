const json_server = require('json-server')
const movie_server = json_server.create()
const cors = require('cors')
movie_server.use(cors())
const middleware = json_server.defaults()
movie_server.use(middleware)
const router = json_server.router('db.json')
movie_server.use(router)
const PORT=7000
movie_server.listen(PORT,()=>{
    console.log(`____________server running on PORT: ${PORT}__________`);
})

