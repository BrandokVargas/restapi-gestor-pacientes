import { connecction } from "../connecction.js";
export const ping = async (req, res) => {

    const [pacientes] = await connecction.query('SELECT "Pong" as result    ');
    res.json(pacientes[0]);

}