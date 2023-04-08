class ColorService {
    _api = 'https://api.sampleapis.com/csscolornames/colors';

    getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }


    getAllColors = async () => {
        const res = await this.getResource(this._api);
        console.log(res);
    };

}

export default ColorService;