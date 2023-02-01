import { createPool } from "mysql2/promise";
import { DB_DATABASE,DB_HOST,DB_PORT,DB_USER } from "./config.js";

export const connecction = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: '',
    port: DB_PORT,
    database: DB_DATABASE  
})