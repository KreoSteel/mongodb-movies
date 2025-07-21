import { getAllMoviesOperation, getMovieByIdOperation, createMovieOperation, updateMovieOperation, deleteMovieOperation } from "../operations/moviesOperation.js";

const moviesController = {
    getAllMovies: async (req, res) => {
        try {
            const movies = await getAllMoviesOperation();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getMovieById: async (req, res) => {
        try {
            const movie = await getMovieByIdOperation(req.params.id);
            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    createMovie: async (req, res) => {
        try {
            const { title, year, director, genres, actors, rating, description } = req.body;
            const movie = await createMovieOperation(title, year, director, genres, actors, rating, description);
            res.status(201).json(movie);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updateMovie: async (req, res) => {
        try {
            const { id } = req.params;
            const { title, year, director, genres, actors, rating, description } = req.body;
            const movie = await updateMovieOperation(id, title, year, director, genres, actors, rating, description);
            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deleteMovie: async (req, res) => {
        try {
            const { id } = req.params;
            const movie = await deleteMovieOperation(id);
            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default moviesController;