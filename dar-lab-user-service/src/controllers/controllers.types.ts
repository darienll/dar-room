import { Router } from "express";

export interface Controller {
    initRoutes: () => Router,
}