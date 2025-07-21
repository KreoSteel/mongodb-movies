import db from "../utils/mongoClient.js";
import { ObjectId } from "mongodb";

export async function getAllActors() {
    try {
        const actors = await db.collection("actors").find({}).project({_id: 0}).toArray();
        return actors;
    } catch (error) {
        console.error("Error fetching actors:", error);
        throw error;
    }
}

export async function getActorById(id) {
    try {
        const actor = await db.collection("actors").findOne({ _id: new ObjectId(id) });
        return actor;
    } catch (error) {
        console.error("Error fetching actor by id:", error);
        throw error;
    }
}

export async function createActor(actor) {
    const result = await db.collection("actors").insertOne(actor);
    return result;
}

export async function updateActor(id, actor) {
    const result = await db.collection("actors").updateOne({ _id: new ObjectId(id) }, { $set: actor });
    return result;
}

export async function deleteActor(id) {
    const result = await db.collection("actors").deleteOne({ _id: new ObjectId(id) });
    return result;
}