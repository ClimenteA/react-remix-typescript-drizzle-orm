import fs from 'node:fs'
import Database from "better-sqlite3"
import { drizzle } from "drizzle-orm/better-sqlite3"
import { migrate } from "drizzle-orm/better-sqlite3/migrator"
import * as softgata from './dbtables'


if (!fs.existsSync("./data")) fs.mkdirSync("./data")

const sqlite = new Database("./data/database.db")

export const db = drizzle(sqlite, { schema: { ...softgata } })

migrate(db, { migrationsFolder: "./app/backend.server/migrations" })

