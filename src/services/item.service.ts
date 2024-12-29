import { Request } from "express";
import { DatabaseMemory } from "../data/database-memory";


export class ItemService {

    private static database = new DatabaseMemory();


    public async list(req:Request){
        const search = req.query.search as string || undefined;
        return ItemService.database.list(search);
    }

    public async post(req:Request){
        const { name } = req.body;
        ItemService.database.create({
            name
        });

        console.log(ItemService.database.list());
    }

    public async put(req:Request){
        const itemId = req.params.id;
        const { name } = req.body;

        ItemService.database.update(itemId, {
            name
        });
    }

    public async delete(req:Request){
        const itemId = req.params.id;
        ItemService.database.delete(itemId);
    }
}