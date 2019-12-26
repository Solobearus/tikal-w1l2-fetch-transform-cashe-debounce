import {ShowsAPI} from './index.js'


// http://api.tvmaze.com/search/shows?q=american
const api = new ShowsAPI("http://api.tvmaze.com/search/shows?q=americans");

api.fetchData()