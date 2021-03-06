import React, { Component } from 'react';
import './App.css';
import './components/PostContainer/PostContainer.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import dummyData from './instagram_assets/dummy-data.js';
import Timeline from './components/Timeline/Timeline.js';
import PostsPage from './components/PostsPage/PostsPage.js';
import Authenticate from './components/Authentication/Authenticate.js';

// import Authenticate from './components/Authentication/Authenticate.js';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     posts: [],
  //     filteredPosts: []
  //   };
  // }

  // componentDidMount() {
  //   this.setState({ posts: dummyData });
  // }

  // searchForPosts = event => {
  //   const posts = this.state.posts.filter(post =>{
  //     if (post.username.includes(event.target.value)) {
  //       return post;
  //     }
  //   });
  //   this.setState({filteredPosts: posts});
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <SearchBar searchForPosts={this.searchForPosts}/>
  //       <Timeline posts={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts} />
  //     </div>
  //   );
  // }
  render() {
    return (
      <PostsPage />
    );
  }
}

export default Authenticate(App);
