import React from 'react'
import Posts from './components/Posts'
import PostForm from './components/PostForm'
import FetchedPosts from './components/FetchedPosts'

function App() {
  console.log('I am here: ')
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Асинхронные посты</h2>
          <FetchedPosts posts={[]}/>
        </div>
      </div>
    </div>
  );
}

export default App;

//54 00
