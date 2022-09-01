import React, { Component } from 'react'
const rootPostsURL = "https://localhost:3000"

class Posts extends Component {
	constructor(props) {
	  super(props)
	  this.state = {
			posts: []
		}
	}

  // When the Posts component loads it retreives data from API
  componentDidMount() {
		fetch(`${rootPostsURL}/posts`)
		.then(response => {
			console.log(response);
		})
		
		// eventually setting state with the data
    //this.setState({posts: []})
  }

	render() {
	  return (
			<ul>
				{ 
					this.state.posts.map((post) => {
						return <li><a href="#/">{post}</a></li>
					})
				}
			</ul>
	  )
	}
}

export default Posts;