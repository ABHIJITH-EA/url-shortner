export async function shortUrl(url) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({url})
        });

        if(!response.ok) {
            throw new Error("Failed to shorten the URL");
        }

        return await response.json();
    } catch(error) {
        console.error('Error: ', error);
        throw error;
    }
}