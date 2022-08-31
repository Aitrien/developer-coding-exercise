const express = require('express')
const { getTopWords } = require('./utils/tags')
const fs = require('fs').promises
const app = express()
const rootPostDir = '../assets/posts'

/**
 *  Returns the detail of an individual post in json, formatted as:
 * {
 *  post: {
 *    content: <article's markdown content>,
 *    tags: <array of 5 top tags for the post>
 *  }
 * }
 */
app.get('/post/:slug', function (req, res) {
  readPost(req.params.slug + '.md')
  .then(response => {
    if (response != null) {
      res.json(
      {
        post: {
          content: response,
          tags: "To be implemented."
      }
    })
    } else {
      // readPost could not read the relevant file
      res.status(404).send("Post not found.")
    }
  })
})

/**
 * Returns a json array of all posts, formatted as:
 * [
 *  {
 *    title: <article's title>,
 *    slug: <article's slug>
 *  },
 *  ...
 * ]
 */
app.get('/posts', function (req, res) {
  fs.readdir(rootPostDir)
  .then(files => {
    allPosts = Promise.all(files.map(file => readPost(file)
      .then(content => {
        const contentHeader = content.split("===")[1]
        const contentTitle = contentHeader.split("\r\n")[1].slice(7)
        const contentSlug = contentHeader.split("\r\n")[3].slice(6)

        let post = {
          title: contentTitle,
          slug: contentSlug
        }
        
        return post
      }))
    )
    .then(result => {
      //console.log(result)
      res.json(result)
    })
  })
  .catch(err => {
    console.error(err)
  })
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})

/*
* Reads the markdown content corresponding to the provided title.
  This has been done using async await such that the app is scalable,
  for example the blogs could be hosted on an external database.
*/
async function readPost(title) {
  try {
    const postData = await fs.readFile(`${rootPostDir}/${title}`)
    return postData.toString()
  } catch (error) {
    console.error(`${error} - Encountered error reading file.`)
  }
}