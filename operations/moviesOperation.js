import { getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie } from "../services/moviesServices.js";
import { getGenreById } from "../services/genresServices.js";
import { getActorById } from "../services/actorsServices.js";

export async function getAllMoviesOperation() {
    const movies = await getAllMovies();
    return movies;
}

export async function getMovieByIdOperation(id) {
    if (!id) {
        throw new Error("Movie ID is required");
    }
    const movie = await getMovieById(id);
    if (!movie) {
        throw new Error("Movie not found");
    }
    return movie;
}

export async function createMovieOperation(title, year, director, genreIds, actorIds, rating, description) {
    try{
    if (!title) {
        throw new Error("Title is required");
    }
    if (!year) {
        throw new Error("Year is required");
    }
    if (!director) {
        throw new Error("Director is required");
    }
    if (!genreIds) {
        throw new Error("Genre IDs are required");
    }
    if (!actorIds) {
        throw new Error("Actor IDs are required");
    }
    if (!rating) {
        throw new Error("Rating is required");
    }
    actorIds.forEach(async (actorId) => {
        const actor = await getActorById(actorId);
        if (!actor) {
            throw new Error("Actor not found");
        }
    });
    genreIds.forEach(async (genreId) => {
        const genre = await getGenreById(genreId);
        if (!genre) {
            throw new Error("Genre not found");
        }
    });
    const movie = await createMovie({title, year, director, genreIds, actorIds, rating, description});
    return movie;
    } catch (error) {
        console.error("Error creating movie:", error);
        throw error;
    }
}

export async function updateMovieOperation(id, title, year, director, genreIds, actorIds, rating, description) {
    if (!id) {
        throw new Error("Movie ID is required");
    }
    if (!title) {
        throw new Error("Title is required");
    }
    if (!year) {
        throw new Error("Year is required");
    }
    if (!director) {
        throw new Error("Director is required");
    }
    if (!genreIds) {
        throw new Error("Genre IDs are required");
    }
    genreIds.forEach(async (genreId) => {
        const genre = await getGenreById(genreId);
        if (!genre) {
            throw new Error("Genre not found");
        }
    });
    actorIds.forEach(async (actorId) => {
        const actor = await getActorById(actorId);
        if (!actor) {
            throw new Error("Actor not found");
        }
    });
    if (!rating) {
        throw new Error("Rating is required");
    }
    const movie = await updateMovie(id, {title, year, director, genreIds, actorIds, rating, description});
    return movie;
}

export async function deleteMovieOperation(id) {
    if (!id) {
        throw new Error("Movie ID is required");

    }
    const movie = await deleteMovie(id);
    return movie;
}