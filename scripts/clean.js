const config = require('xtconf')()
const fs = require('fs').promises
const ejs = require('ejs')

const catcher = (error) => {
  console.error(error)
  return
}


const locations = config.get('locations')

const data = {
  title: 'Places to go on Vacation',
  api: config.get('api'),
  locations: JSON.stringify(locations)
}

console.log('data', data.locations)

const clean = () => fs.unlink('./dist/stylesheets/style.css')
  .catch(catcher)
  .then(()=> fs.rmdir('./dist/stylesheets'))
  .catch(catcher)
  .then(()=> fs.unlink('./dist/index.html'))
  .catch(catcher)
  .then(()=> fs.rmdir('./dist'))
  .then(()=> {
    console.info('Clean Complete')
  })

module.exports = clean