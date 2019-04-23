const config = require('xtconf')()
const fs = require('fs').promises
const ejs = require('ejs')

const catcher = error => {
  console.error(error)
}

const locations = config.get('locations')

const data = {
  title: 'Places to go on Vacation',
  api: config.get('api'),
  locations: JSON.stringify(locations),
}
console.log('Prepare to build', data)
const build = () =>
  fs
    .rmdir('./dist/stylesheets/style.css')
    .catch(catcher)
    .then(() => fs.rmdir('./dist/stylesheets'))
    .catch(catcher)
    .then(() => fs.rmdir('./dist/index.html'))
    .catch(catcher)
    .then(() => fs.rmdir('./dist'))
    .catch(catcher)
    .then(() => fs.mkdir('./dist'))
    .catch(catcher)
    .then(() => fs.readFile('./views/index.ejs', { encoding: 'utf8' }))
    .then(t => {
      const template = ejs.compile(t, {})
      const out = template(data)
      return fs.writeFile('./dist/index.html', out, 'utf8')
    })
    .catch(catcher)
    .then(() => fs.mkdir('./dist/stylesheets'))
    .catch(catcher)
    .then(() => fs.copyFile('./public/stylesheets', './dist/stylesheets'))
    .catch(catcher)
    .then(() =>
      fs.copyFile(
        './public/stylesheets/style.css',
        './dist/stylesheets/style.css'
      )
    )
    .catch(catcher)
    .then(() => {
      console.info('Complete')
    })

module.exports = build
