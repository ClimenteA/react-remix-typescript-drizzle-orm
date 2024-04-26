import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const softgataContactTable = sqliteTable("softgataContactTable", {
    id: integer("id").primaryKey(),
    email: text("email").notNull(),
    message: text("message").notNull(),
})
