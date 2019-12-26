import { ShowsAPI } from './index.js'


const api = new ShowsAPI("https://api.tvmaze.com/search/shows?q=americans");

api.fetchData('lost').then(console.log)
api.fetchData('walking').then(console.log)
