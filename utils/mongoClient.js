import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const URL = process.env.MONGODB_CONNECTION_STRING;
const cl = new MongoClient(URL);

const dbName = "movies";

const db = cl.db(dbName);

export default db;