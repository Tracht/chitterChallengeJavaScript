import React from 'react';
import './test.css';
import './index.css';

class Tweets extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.fetchData(`https://chitter-backend-api-v2.herokuapp.com/peeps`);
  }

  fetchData = (apiToFetch) => {
    fetch(apiToFetch)
    .then(response => response.json())
    .then((data) => {
      this.setState({
        posts: data,
      });
    });
  }

  render() {
    let data = this.state.posts;

    return ( 
    <div class="twitter-posts">

        {data.map((post) => {
          return(
            <section class="tweet-card" key={post.id}> 
              <p class="user-handle"> {post.user.handle} tweeted </p>
              <p class="post-body"> {post.body} </p> 
              <p class="likes"> Likes: { post.likes.length } </p>
              <p class="created-on-date"> posted on {post.created_at} </p>
              <p class="updated-on-date"> updated at {post.updated_at} </p>
            </section>
            )
          })
        }

    </div>
    
    )
  }

}

export default Tweets;