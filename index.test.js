import { ShowsAPI } from './index.js'


const api = new ShowsAPI("http://api.tvmaze.com/search/shows?q=americans");

api.fetchData('lost').then(console.log)
api.fetchData('walking').then(console.log)
// console.log(api.fetchData('lost'));
