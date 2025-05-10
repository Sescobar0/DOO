const express = require('express');
const serverRouter = require('./routes/serverRouter');

class Server {
    constructor() {
        this.app = express();
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(express.json());
        this.app.listen(this.app.get('port'), () => {
            console.log("Servidor corriendo por el puerto => ", this.app.get('port'));
        });

        const router = express.Router();
        router.get('/', (_req, res) => {
            console.log("Nueva conexión");
            res.status(200).json({ message: "Hola mundo!" });
        });
        
        const serverR = new serverRouter.default();

        this.app.use(serverR.router);
        this.app.use(router);
    }
}

const objServer = new Server();



serverRouter.js

const express = require('express');
const serverController = require("../controllers/serverController");

class ServerRouter{
    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const objServerC = new serverController.default();
    }
}

exports.default = ServerRouter;