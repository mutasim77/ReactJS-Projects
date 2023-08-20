class RickMortyService {
    _apiBase = `https://rickandmortyapi.com/api/`

    getResources = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} status: ${res.status}`);
        }

        const data = await res.json();
        return data;
    }

    getAllCharacters = async (page = 1) => {
        const res = await this.getResources(`${this._apiBase}character?page=${page}`);
        return res.results.map(this._transformCharacter);
    }

    _transformCharacter = (results) => {
        return {
            name: results.name,
            status: results.status,
            gender: results.gender,
            image: results.image
        }

    }
}

export default RickMortyService;

