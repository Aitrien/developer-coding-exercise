## Introduction

Hi! This is my first time running both a server and client setup using React and Express, so the blogging platform submission as of running out of time does not have a complete working frontend. I would like to return to this project once I've polished up my skills a little more to see the job done.

#### File Structure

`/express` - contains backend server API elements of the project, using Express

`/react` - contains frontend client elements of the project, using React

each folder has independent node_modules folders

#### Instructions

1. Install dependencies with `npm install`
2. Run the backend server within the `/express` directory with `node ./index.js`
3. Run the frontend client within the `/react` directory with `npm start`

#### Initial Feature Checklist

**Backend:**

1. Process blog markdowns into meaningful data structures
2. Send JSON for individual post content
3. Send JSON array for all posts

**Frontend:**

1. Fetch JSON from API
2. Use JSON data to create Posts component
3. Produce Posts page with all blogs
4. Process JSON content into HTML elements
5. Produce individual Post page