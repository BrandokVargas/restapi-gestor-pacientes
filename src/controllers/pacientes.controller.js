import { connecction } from "../connecction.js";




export const getAllPacientes = async (req, res) => {
    try {
        const [pacientes] = await connecction.query('SELECT * FROM pacientes');
        res.json(pacientes);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const searchPaciente = async (req, res) => {

    try {
        const {dni} = req.params;
        const [pacientes] = await connecction.query('SELECT * FROM pacientes WHERE dni = ?',[dni])
    
        if(pacientes.length <=0){
            return res.status(404).json({msg:"Paciente no encontrado"})
        }
    
        res.json(pacientes[0]);
    } catch(error){
        return res.status(500).json({message: error.message});
    }

   

}


export const createPacientes = async (req, res) => {

    try {
        const {age, dni,height,lastname,name,symptom,weight} = req.body;

        const [insertPacientes] = await connecction.query('INSERT INTO pacientes(age,dni,height,lastname,name,symptom,weight) VALUES (?,?,?,?,?,?,?)',[age,dni,height,lastname,name,symptom,weight])
        res.send({
            id: insertPacientes.insertId,
            age, 
            dni,
            height,
            lastname,
            name,
            symptom,
            weight,
        })
    }catch(error){
        return res.status(500).json({message: error.message});
    }

}

export const deletePaciente= async (req, res) => {
    try {
        const [pacientes] = await connecction.query('DELETE FROM pacientes WHERE id = ?',[req.params.id]); 

        if(pacientes.affectedRows <= 0) {
            return res.status(404).json({msg:"Paciente no encontrado"});
        }
    
        res.sendStatus(204);
    } catch(error){
        return res.status(500).json({message: error.message});
    }


}

export const updatePaciente = async (req, res) => {

    try {
        const {id} = req.params;
        const {age, dni,height,lastname,name,symptom,weight} = req.body;
    
        const [updatingPacientes] = await connecction.query('UPDATE pacientes SET age = ?, dni = ?, height = ?, lastname = ?, name = ?, symptom = ?, weight = ? WHERE id = ?',[age,dni,height,lastname,name,symptom,weight,id]);
    
        if (updatingPacientes.affectedRows === 0) return res.status(404).json({msg:"Paciente no encontrado"});
    
        res.sendStatus(204);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}




