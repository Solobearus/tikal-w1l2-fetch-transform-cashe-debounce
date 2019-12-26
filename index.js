
class ShowsAPI {
    constructor(url) {
        this.url = url;
        this.cashe = {};
    }

    async fetchData(query) {
        if (localStorage.getItem(query)) {
            return JSON.parse(localStorage.getItem(query));
        }
        const result = await fetch(this.url + "/" + query);
        const resultParsed = await result.json(result);

        const transformed = resultParsed.map(item => {
            return {
                id: item.show.id,
                title: item.show.name,
                description: item.show.summary,
                score: item.score
            }
        })

        localStorage.setItem(query, JSON.stringify(transformed));
        return transformed;
    }
}

const api = new ShowsAPI("http://api.tvmaze.com/search/shows?q=americans");

api.fetchData();
export { ShowsAPI };
