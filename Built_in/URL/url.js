let url1='https://harshachandragiri.netlify.app/'

// const url = require('console');
const url=require('url')
let urldata=url.parse(url1,true);
console.log(urldata);

console.log(urldata.hostname);
console.log(urldata.port);
console.log(urldata.query);
console.log(urldata.query.userid);
console.log(urldata.query);
