import express, { Request, Response } from "express"
import cors from 'cors';
import { middlewares } from "./middlewares/middlewares";
import router from "./routes/routes";


function createApp(){
    const app = express();

    //Use Cors
    app.use(cors())
    
    //Middleware JSON
    app.use(express.json());

    // Define routes using the centralized router 
    app.use(router);


    return app;
}

export default createApp;