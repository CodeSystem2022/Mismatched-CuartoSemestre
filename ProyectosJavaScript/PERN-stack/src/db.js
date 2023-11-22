import pg from "pg";
import {PG_DATABASE, PG_PORT, PG_HOST, PG_USER, PG_PASSWORD} from "./config.js"

export const pool = new pg.Pool({
    port: PG_PORT,
    host: PG_HOST,
    user: PG_USER,
    password: PG_PASSWORD,
    database: PG_DATABASE,
});

pool.on("connect", () => {
    console.log("Conectado a la base de datos.")
});