/*const API_URL = 'http://s3-4677.nuage-peda.fr/bouchapi2/api/produits';

async function getProduit(page = 1) {
    try {
        const response = await fetch(`${API_URL}?page=${page}`);
        if (!response.ok) {
            throw new Error('Erreur :' +'response.statusText');
        }
        const data = await response.json();
        return data;
    }
    catch (erreur) {
        console.error('Erreur lors de la récupération: ', erreur);
        throw erreur;
    }
}

export { getProduit }
*/