import { getAllActors, getActorById, createActor, updateActor, deleteActor } from "../services/actorsServices.js";

export async function getAllActorsOperation() {
    const actors = await getAllActors();
    return actors;
}

export async function getActorByIdOperation(id) {
    if (!id) {
        throw new Error("Actor ID is required");
    }
    const actor = await getActorById(id);
    if (!actor) {
        throw new Error("Actor not found");
    }
    return actor;
}

export async function createActorOperation(name, birthYear, nationality, bio) {
    if (!name) {
        throw new Error("Name is required");
    }
    if (!birthYear) {
        throw new Error("Birth year is required");
    }
    if (!nationality) {
        throw new Error("Nationality is required");
    }
    if (!bio) {
        throw new Error("Bio is required");
    }
    const actor = await createActor({name, birthYear, nationality, bio});
    return actor;
}

export async function updateActorOperation(id, name, birthYear, nationality, bio) {
    if (!id) {
        throw new Error("Actor ID is required");
    }
    if (!name) {
        throw new Error("Name is required");
    }
    if (!birthYear) {
        throw new Error("Birth year is required");
    }
    if (!nationality) {
        throw new Error("Nationality is required");
    }
    if (!bio) {
        throw new Error("Bio is required");
    }
    const actor = await updateActor(id, {name, birthYear, nationality, bio});
    return actor;
}

export async function deleteActorOperation(id) {
    if (!id) {
        throw new Error("Actor ID is required");
    }
    
    const actor = await deleteActor(id);
    return actor;
}