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
    console.log(response)
    if (response != null) {
      res.json({
      post: {
        content: response,
        tags: "To be implemented."
      }
    })
    } else {
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
  // ... fill in you own code ...
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})

// Reads the markdown content corresponding to the provided title
async function readPost(title) {
  try {
    const postData = await fs.readFile(`${rootPostDir}/${title}`)
    return postData.toString()
  } catch (error) {
    console.error(`${error} - Encountered error reading file.`)
  }
}