import { NextFunction, Request, Response } from "express";
import { ItemService } from "../services/item.service";

export class itemController {

    private service: ItemService;
    
    constructor() {
        this.service = new ItemService();
    }

    public async list(req:Request, res:Response, next: NextFunction){
        try{
            res.status(200).json(await this.service.list(req));
        }catch(err){
            next(err)
        }
    }

    public async post(req:Request, res:Response, next: NextFunction){
        try{
            const result = await this.service.post(req);
            res.status(201).json(result);
        }catch(err){
            next(err)
        }
    }

    public async put(req:Request, res:Response, next: NextFunction){
        try{
            const result = await this.service.put(req);
            res.status(200).json(result);
        }catch(err){
            next(err)
        }
    }

    public async delete(req:Request, res:Response, next: NextFunction){
        try{
            await this.service.delete(req);
            res.status(204).send();
        }catch(err){
            next(err)
        }
    }
}