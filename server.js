
require('xtconf')()
const cling = require('static-cling')


const port =  process.env.PORT;

const config = {
  root: './dist',
  port: port,
  filename: 'index.html'
}
cling(config)
