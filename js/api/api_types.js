const API_URL = 'http://s3-4677.nuage-peda.fr/bouchapi2/api/types';

async function getType(page = 1) {
    try {
        const response = await fetch(`${API_URL}?page=${page}&order%5Bdescription%5D=asc`);
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

export { getType }