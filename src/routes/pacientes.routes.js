import { Router } from "express";
import { getAllPacientes ,createPacientes, searchPaciente,updatePaciente,deletePaciente} from "../controllers/pacientes.controller.js";

const router = Router();

router.get('/pacientes', getAllPacientes) //Muestra todo los datos de los pacientes
router.get('/pacientes/:dni',searchPaciente)
router.post('/pacientes', createPacientes) 
router.put('/pacientes/:id',updatePaciente) 
router.delete('/pacientes/:id',deletePaciente)




export default router;