const path = require('path')
const ghpages = require('gh-pages')

module.exports = () =>
  new Promise((resolve, reject) => {
    return ghpages.publish(
      path.resolve(process.cwd(), 'dist'),
      {
        message: 'Publish generated commit [ci skip]',
      },
      err => {
        if (err) {
          return reject(err)
        }
        return resolve(true)
      }
    )
  })
