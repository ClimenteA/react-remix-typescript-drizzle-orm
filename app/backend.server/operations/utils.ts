

export async function sendNotification(title: string, message: string, level: string = "info") {
    try {

        const apikey = process.env.SIMPLE_SERVER_MONITOR_APIKEY

        if (!apikey) {
            console.error("SIMPLE_SERVER_MONITOR_APIKEY not found. Didn't sent notification.")
            return
        }

        const response = await fetch("http://simple_server_monitor:4325/simple-server-monitor/save", {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
                'ApiKey': apikey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Title: title,
                Message: message,
                Level: level
            })
        })
        const data = await response.json()
        console.log("Sent notification.", data)
    } catch (error) {
        console.error('Error:', error)
    }
}
