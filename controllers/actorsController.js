import { getAllActorsOperation, getActorByIdOperation, createActorOperation, updateActorOperation, deleteActorOperation } from "../operations/actorsOperation.js";

const actorsController = {
    getAllActors: async (req, res) => {
        try {
            const actors = await getAllActorsOperation();
            res.status(200).json(actors);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getActorById: async (req, res) => {
        try {
            const actor = await getActorByIdOperation(req.params.id);
            res.status(200).json(actor);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    createActor: async (req, res) => {
        try {
            const { name, birthYear, nationality, bio } = req.body;
            const actor = await createActorOperation(name, birthYear, nationality, bio);
            res.status(201).json(actor);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updateActor: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, birthYear, nationality, bio } = req.body;
            const actor = await updateActorOperation(id, name, birthYear, nationality, bio);
            res.status(200).json(actor);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deleteActor: async (req, res) => {
        try {
            const { id } = req.params;
            const actor = await deleteActorOperation(id);
            res.status(200).json(actor);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default actorsController;