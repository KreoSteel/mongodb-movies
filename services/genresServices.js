import db from "../utils/mongoClient.js";
import { ObjectId } from "mongodb";

export async function getAllGenres() {
    try {
        const genres = await db.collection("genres").find({}).project({_id: 0}).toArray();
        return genres;
    } catch (error) {
        console.error("Error fetching genres:", error);
        throw error;
    }
}

export async function getGenreById(id) {
    try {
        const genre = await db.collection("genres").findOne({ _id: new ObjectId(id) });
        return genre;
    } catch (error) {
        console.error("Error fetching genre by id:", error);
        throw error;
    }
}

export async function createGenre(genre) {
    const result = await db.collection("genres").insertOne(genre);
    return result;
}

export async function updateGenre(id, genre) {
    const result = await db.collection("genres").updateOne({ _id: new ObjectId(id) }, { $set: genre });
    return result;
}

export async function deleteGenre(id) {
    const result = await db.collection("genres").deleteOne({ _id: new ObjectId(id) });
    return result;
}