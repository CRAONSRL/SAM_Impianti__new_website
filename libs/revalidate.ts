export async function triggerSiteRevalidation(paths?: string[]) {
  try {
    const response = await fetch('/api/revalidate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: process.env.NEXT_PUBLIC_REVALIDATE_SECRET, // Se vuoi esporre il secret al client
        paths: paths || ['/'], // Array di percorsi specifici o default
      }),
    });

    if (!response.ok) {
      throw new Error(`Revalidation failed: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Site revalidation triggered:', data);
    return data;
  } catch (error) {
    console.error('Error triggering site revalidation:', error);
    throw error;
  }
}