import React from 'react';
import SinglePost from './SinglePost'
import Header from './Header'


const PostsList = [
  {
    id: 1,
    title: 'Making Librem 5 Apps',
    link: 'http://puri.sm',
    author: "ruph123",
    points: 88,
    comments: 50
  },
  {
    id: 2,
    title: 'The Ponzi Career',
    link: 'http://drorpoleg.com',
    author: "elsewhen",
    points: 72,
    comments: 41  
  },
  {
    id: 3,
    title: 'The Shape of Rome (2013)',
    link: 'http://exurbe.com',
    author: "simonebrunozzi",
    points: 107,
    comments: 23 
  },
  {
    id: 4,
    title: 'M1 dev setup with a virtual Linux box',
    link: 'http://kristiandupont.medium.com',
    author: "kristiandupont",
    points: 128,
    comments: 108
  },
  {
    id: 5,
    title: 'Google’s lawyer accidentally made a sensitive document public',
    link: 'http://mattstoller.substack.com',
    author: "PretzelFisch",
    points: 163,
    comments: 34
  },
  {
    id: 6,
    title: 'Chronology of the Liberation',
    link: 'http://buchenwald.de',
    author: "Tomte",
    points: 40,
    comments: 1
  }]


function Posts({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <SinglePost key={post.id} post = {post}/>

      ))}
    </div>
  )
}

function App() {
  return (
    
    <div className="container">
      <Header/>
      <div className="posts">
      <Posts posts={PostsList} />
      </div>
    </div>
    
  )
}

export default App;
