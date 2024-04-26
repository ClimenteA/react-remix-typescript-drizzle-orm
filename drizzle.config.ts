import { defineConfig } from 'drizzle-kit'


export default defineConfig({
    schema: "./app/backend.server/dbtables.ts",
    driver: "better-sqlite",
    dbCredentials: {
        url: './database.db',
    },
    verbose: true,
    strict: true,
})
