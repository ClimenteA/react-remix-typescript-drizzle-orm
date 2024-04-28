import { db } from "../../dbconfig"
import { softgataContactTable } from "../../dbtables"
import { sendNotification } from "../utils"


export default async function saveMessage(email: string, message: string) {
    try {
        const response = await db.insert(softgataContactTable).values({ email, message }).returning()
        await sendNotification(email, message)
        return response
    } catch (error) {
        console.error(error)
        return null
    }
}

