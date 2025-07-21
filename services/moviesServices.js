import db from "../utils/mongoClient.js";
import { ObjectId } from "mongodb";

export async function getAllMovies() {
    try {
        const movies = await db.collection("movies").find({}).toArray();
        return movies;
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw error;
    }
}

export async function getMovieById(id) {
    try {
        const movie = await db.collection("movies").findOne({ _id: new ObjectId(String(id)) });
        return movie;
    } catch (error) {
        console.error("Error fetching movie by id:", error);
        throw error;
    }
}

export async function createMovie(movie) {
    const result = await db.collection("movies").insertOne(movie);
    return result;
}

export async function updateMovie(id, movie) {
    const result = await db.collection("movies").updateOne({ _id: new ObjectId(String(id)) }, { $set: movie });
    return result;
}

export async function deleteMovie(id) {
    const result = await db.collection("movies").deleteOne({ _id: new ObjectId(String(id)) });
    return result;
}