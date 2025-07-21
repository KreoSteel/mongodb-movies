import { getAllGenresOperation, getGenreByIdOperation, createGenreOperation, updateGenreOperation, deleteGenreOperation } from "../operations/genreOperation.js";

const genresController = {
    getAllGenres: async (req, res) => {
        try {
            const genres = await getAllGenresOperation();
            res.status(200).json(genres);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getGenreById: async (req, res) => {
        try {
            const genre = await getGenreByIdOperation(req.params.id);
            res.status(200).json(genre);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    createGenre: async (req, res) => {
        try {
            const { name, description } = req.body;
            const genre = await createGenreOperation(name, description);
            res.status(201).json(genre);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updateGenre: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, description } = req.body;
            const genre = await updateGenreOperation(id, name, description);
            res.status(200).json(genre);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deleteGenre: async (req, res) => {
        try {
            const { id } = req.params;
            const genre = await deleteGenreOperation(id);
            res.status(200).json(genre);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default genresController;