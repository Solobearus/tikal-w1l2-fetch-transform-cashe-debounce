
class ShowsAPI {
    constructor(url) {
        this.url = url;
        this.cashe = {};
    }

    async fetchData(query) {
        // if (localStorage.getItem(this.url + "/" + query)) {
        //     return JSON.parse(localStorage.getItem(this.url + "/" + query));
        // } else {
        if (this.cashe[query])
            return this.cashe[query];

        const result = await fetch(this.url + "/" + query);
        const resultParsed = await result.json(result);
        const transformed = data.map(item => {
            return {
                id: item.show.id,
                title: item.show.name,
                description: item.show.summary,
                score: item.score
            }
        })

        this.cashe[query] = transformed;
        // console.log(resultParsed);
        
        //     localStorage.setItem(this.url + "/" + query, JSON.stringify(resultParsed));
        // }
    }



}

const api = new ShowsAPI("http://api.tvmaze.com/search/shows?q=americans");

api.fetchData();
// export default ShowsAPI;
