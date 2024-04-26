import { db } from "../../dbconfig"
import { softgataContactTable } from "../../dbtables"


export default async function saveMessage(email: string, message: string) {
    try {
        return await db.insert(softgataContactTable).values({ email, message }).returning()
    } catch (error) {
        console.error(error)
        return null
    }
}

