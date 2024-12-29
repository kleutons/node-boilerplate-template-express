import { Application } from "express";
import { errorHandler } from "./errorHandler";
import { routeNotFound } from "./routeNotFound";

export const middlewares = (app: Application) => {
    app.use(errorHandler);
    app.use(routeNotFound);
};
