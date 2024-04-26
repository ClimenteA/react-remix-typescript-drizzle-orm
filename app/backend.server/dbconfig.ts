import Database from "better-sqlite3"
import { drizzle } from "drizzle-orm/better-sqlite3"
import { migrate } from "drizzle-orm/better-sqlite3/migrator"
import * as softgata from './dbtables'


const sqlite = new Database("database.db")

export const db = drizzle(sqlite, { schema: { ...softgata } })

migrate(db, { migrationsFolder: "./app/backend.server/migrations" })

