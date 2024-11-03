export default defineEventHandler(async () => {
    const url = 'https://docs.google.com/spreadsheets/d/1qy2YsenHx3CkzLGj8H9AnoSl7vZR0znZDmRAH7rTuNs/gviz/tq?tqx=out:json&tq&gid=981173174';

    try {
        const response = await fetch(url);
        const text = await response.text();

        // Clean up the JSONP wrapper
        const jsonText = text
            .replace("/*O_o*/", "") // Remove JSONP wrapper comment
            .replace("google.visualization.Query.setResponse(", "")
            .slice(0, -2); // Remove the trailing ");"

        // Parse the cleaned JSON text
        const data = JSON.parse(jsonText);
        // Extract and format the data rows
        const rows = data.table.rows.map(row =>
            row.c.map(cell => (cell && cell.v) || "")
        );
        return rows.map(row => ({
            id: row[0], // Assuming you want to keep the ID
            name: row[1],
            mobile: row[2],
            size: row[3],
            quantity: row[4],
            date: row[5] ? new Date(row[5].replace('Date(', '').replace(')', '').split(',').map(Number)) : null,
            status: row[6],
        }));
    } catch (error) {
        console.error("Error fetching Google Sheets data:", error);
        return {
            success: false,
            error: "Failed to fetch data from Google Sheets."
        };
    }
});
